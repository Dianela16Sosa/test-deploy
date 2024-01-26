import { BlobDeleteOptions, BlobDownloadResponseParsed, BlobServiceClient, BlockBlobClient, ContainerClient, StorageSharedKeyCredential } from '@azure/storage-blob';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
//import { readFileSync } from 'fs';
import axios from 'axios';
import { azureStorageConfig } from 'src/config/azureStorageConfig';
import { imageFileNamer, imageUserFileNamer } from './helpers/fileNamer.helper';

interface ContainerImage {
  file: File,
  url: string,
}

@Injectable()
export class FilesService {
  // sharedKeyCredential = new StorageSharedKeyCredential(
  //   azureStorageConfig.accountName,
  //   azureStorageConfig.accountKey,
  // );

  private getBlobServiceInstance() { 
    const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.CONNECTION_STRING_AZURE_STORAGE); 
    
    return blobServiceClient; 
  }

  private getContainerClient(containerName: string) {
    const blobService = this.getBlobServiceInstance(); 
    return blobService.getContainerClient(containerName);
  }

  private async getBlockBlobClient(containerName: string, fileName: string): Promise<BlockBlobClient> {
    return this.getContainerClient(containerName).getBlockBlobClient(fileName); 
  }

  async createContainerClient(containerName: string) {
    const containerClient: ContainerClient = this.getContainerClient(containerName);
    const containerCreateResponse = await containerClient.createIfNotExists();

    if (!containerCreateResponse.errorCode) {
      return { message: `created ${ containerName } container`};
    } else {
      throw new InternalServerErrorException(`could not create ${ containerName } container`);
    }
  }

  async deleteContainer(containerName: string) {
    const blobServiceClient = this.getBlobServiceInstance();
    const containerDeleteResponse = await blobServiceClient.deleteContainer(containerName);
  
    if (!containerDeleteResponse.errorCode) {
      return { message: `deleted ${ containerName } container`};
    } else {
      throw new InternalServerErrorException(`could not delete ${ containerName } container`);
    }
  }
  
  // async uploadVehicleImage(containerName: string, file: Express.Multer.File) {  
  //   const blockBlobClient = await this.getBlockBlobClient(containerName, file.originalname);
  //   await blockBlobClient.uploadData(file.buffer); 
  //   return blockBlobClient.url; 
  // }

  async uploadFiles(containerName: string, folderPath: string, files: Express.Multer.File[]) {  
    try {
      const containerClient: ContainerClient = this.getContainerClient(containerName);

      for (const file of files) {
        let filePath: string = imageFileNamer(folderPath, file); 
        
        const blockBlobClient: BlockBlobClient = containerClient.getBlockBlobClient(filePath);
        await blockBlobClient.uploadData(file.buffer);
      }

      return { message: "files uploaded successfully" };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async downloadVehicleImages(containerName: string, folderPath: string): Promise<{ Images: string[] }> {
    const imagesInBase64: string[] = []

    try {
      const containerClient: ContainerClient = this.getContainerClient(containerName);
      const blobs = containerClient.listBlobsFlat();

      for await (const blob of blobs) {
        if (blob.name.includes(folderPath)) {
          const blobClient = containerClient.getBlockBlobClient(blob.name);

          //Con axios (también se puede hacer con fetch)
          const response = await axios.get(blobClient.url, { responseType: 'arraybuffer' });

          const contentType: string = blobClient.name.split('.')[1];
          
          const imageInBase64: string = `data:image/${contentType};base64,${Buffer.from(response.data).toString('base64')}`;

          if (blob.name.includes("portada")) {
            imagesInBase64.unshift(imageInBase64);
          } else {
            imagesInBase64.push(imageInBase64);
          }
        }
      }
      //console.log(imagesUrl);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }

    return { Images: imagesInBase64 };
  }

  /*async uploadFile(containerName: string, folderPath: string, file: Express.Multer.File) {  
    try {
      const containerClient: ContainerClient = this.getContainerClient(containerName);
  
      let filePath: string = imageUserFileNamer(folderPath, file); 
          
      const blockBlobClient: BlockBlobClient = containerClient.getBlockBlobClient(filePath);
      await blockBlobClient.uploadData(file.buffer);
  
      return { message: "file uploaded successfully" };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }*/

  async uploadFile(containerName: string, file: Express.Multer.File, fileName: string) {  
    try {
      const containerClient: ContainerClient = this.getContainerClient(containerName);
  
      // let filePath: string = imageUserFileNamer(file); 
          
      const blockBlobClient: BlockBlobClient = containerClient.getBlockBlobClient(fileName);
      await blockBlobClient.uploadData(file.buffer);
  
      return { message: "file uploaded successfully" };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async uploadFileFromBuffer(containerName: string, blobName: string, buffer: Buffer) {
    const containerClient: ContainerClient = this.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    await blockBlobClient.uploadData(buffer);
  }
  
  async downloadFile(containerName: string, fileName: string): Promise<string> {
    let imageInBase64: string = "";

    const containerClient: ContainerClient = this.getContainerClient(containerName);
    const blobClient = containerClient.getBlockBlobClient(fileName);
    //console.log(await blobClient.exists());

    if (await blobClient.exists()) {
      const response = await axios.get(blobClient.url, { responseType: 'arraybuffer' });

      const contentType: string = blobClient.name.split('.')[1];
      
      imageInBase64 = `data:image/${contentType};base64,${Buffer.from(response.data).toString('base64')}`;
    }

    return imageInBase64;
  }

  async deleteBlobIfItExists(containerName: string, folderPath: string, fileName: string){
    // include: Delete the base blob and all of its snapshots.
    // only: Delete only the blob's snapshots and not the blob itself.
    const options: BlobDeleteOptions = {
      deleteSnapshots: 'include' // or 'only'
    }

    const filePath = folderPath + "/" + fileName;

    const blockBlobClient = await this.getBlockBlobClient(containerName, filePath);
    const blobDeleteIfExistsResponse = await blockBlobClient.deleteIfExists(options);

    if (blobDeleteIfExistsResponse.errorCode) {
      throw new InternalServerErrorException("could not delete file");
    }

    return { message: "file deleted successfully" };
  }

  async listFilesNameInFolder(containerName: string, folderPath: string): Promise<{ Images: string[] }> {
    let filesName: string[] = [];

    try {
      const containerClient = this.getContainerClient(containerName);
      const blobs = containerClient.listBlobsFlat();

      for await (const blob of blobs) {
        if (blob.name.includes(folderPath)) {
          filesName.push(blob.name.split('/')[1]);
        }
      }
    } catch(error) {
      console.log(error);
      throw error;
    }

    return { Images: filesName };
  }

  async listBlobsInContainer(containerName: string): Promise<{ blobs: string[] }> {
    let blobsName: string[] = [];

    try {
      const containerClient = this.getContainerClient(containerName);
      const blobs = containerClient.listBlobsFlat();

      for await (const blob of blobs) {
        blobsName.push(blob.name);
      }
    } catch(error) {
      console.log(error);
      throw error;
    }

    return { blobs: blobsName };
  }
}

