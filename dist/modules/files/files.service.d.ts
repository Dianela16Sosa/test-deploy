/// <reference types="multer" />
/// <reference types="node" />
export declare class FilesService {
    private getBlobServiceInstance;
    private getContainerClient;
    private getBlockBlobClient;
    createContainerClient(containerName: string): Promise<{
        message: string;
    }>;
    deleteContainer(containerName: string): Promise<{
        message: string;
    }>;
    uploadFiles(containerName: string, folderPath: string, files: Express.Multer.File[]): Promise<{
        message: string;
    }>;
    downloadVehicleImages(containerName: string, folderPath: string): Promise<{
        Images: string[];
    }>;
    uploadFile(containerName: string, file: Express.Multer.File, fileName: string): Promise<{
        message: string;
    }>;
    uploadFileFromBuffer(containerName: string, blobName: string, buffer: Buffer): Promise<void>;
    downloadFile(containerName: string, fileName: string): Promise<string>;
    deleteBlobIfItExists(containerName: string, folderPath: string, fileName: string): Promise<{
        message: string;
    }>;
    listFilesNameInFolder(containerName: string, folderPath: string): Promise<{
        Images: string[];
    }>;
    listBlobsInContainer(containerName: string): Promise<{
        blobs: string[];
    }>;
}
