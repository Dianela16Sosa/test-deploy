"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const storage_blob_1 = require("@azure/storage-blob");
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const fileNamer_helper_1 = require("./helpers/fileNamer.helper");
let FilesService = class FilesService {
    getBlobServiceInstance() {
        const blobServiceClient = storage_blob_1.BlobServiceClient.fromConnectionString(process.env.CONNECTION_STRING_AZURE_STORAGE);
        return blobServiceClient;
    }
    getContainerClient(containerName) {
        const blobService = this.getBlobServiceInstance();
        return blobService.getContainerClient(containerName);
    }
    async getBlockBlobClient(containerName, fileName) {
        return this.getContainerClient(containerName).getBlockBlobClient(fileName);
    }
    async createContainerClient(containerName) {
        const containerClient = this.getContainerClient(containerName);
        const containerCreateResponse = await containerClient.createIfNotExists();
        if (!containerCreateResponse.errorCode) {
            return { message: `created ${containerName} container` };
        }
        else {
            throw new common_1.InternalServerErrorException(`could not create ${containerName} container`);
        }
    }
    async deleteContainer(containerName) {
        const blobServiceClient = this.getBlobServiceInstance();
        const containerDeleteResponse = await blobServiceClient.deleteContainer(containerName);
        if (!containerDeleteResponse.errorCode) {
            return { message: `deleted ${containerName} container` };
        }
        else {
            throw new common_1.InternalServerErrorException(`could not delete ${containerName} container`);
        }
    }
    async uploadFiles(containerName, folderPath, files) {
        try {
            const containerClient = this.getContainerClient(containerName);
            for (const file of files) {
                let filePath = (0, fileNamer_helper_1.imageFileNamer)(folderPath, file);
                const blockBlobClient = containerClient.getBlockBlobClient(filePath);
                await blockBlobClient.uploadData(file.buffer);
            }
            return { message: "files uploaded successfully" };
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async downloadVehicleImages(containerName, folderPath) {
        const imagesInBase64 = [];
        try {
            const containerClient = this.getContainerClient(containerName);
            const blobs = containerClient.listBlobsFlat();
            for await (const blob of blobs) {
                if (blob.name.includes(folderPath)) {
                    const blobClient = containerClient.getBlockBlobClient(blob.name);
                    const response = await axios_1.default.get(blobClient.url, { responseType: 'arraybuffer' });
                    const contentType = blobClient.name.split('.')[1];
                    const imageInBase64 = `data:image/${contentType};base64,${Buffer.from(response.data).toString('base64')}`;
                    if (blob.name.includes("portada")) {
                        imagesInBase64.unshift(imageInBase64);
                    }
                    else {
                        imagesInBase64.push(imageInBase64);
                    }
                }
            }
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException(error.message);
        }
        return { Images: imagesInBase64 };
    }
    async uploadFile(containerName, file, fileName) {
        try {
            const containerClient = this.getContainerClient(containerName);
            const blockBlobClient = containerClient.getBlockBlobClient(fileName);
            await blockBlobClient.uploadData(file.buffer);
            return { message: "file uploaded successfully" };
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async uploadFileFromBuffer(containerName, blobName, buffer) {
        const containerClient = this.getContainerClient(containerName);
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        await blockBlobClient.uploadData(buffer);
    }
    async downloadFile(containerName, fileName) {
        let imageInBase64 = "";
        const containerClient = this.getContainerClient(containerName);
        const blobClient = containerClient.getBlockBlobClient(fileName);
        if (await blobClient.exists()) {
            const response = await axios_1.default.get(blobClient.url, { responseType: 'arraybuffer' });
            const contentType = blobClient.name.split('.')[1];
            imageInBase64 = `data:image/${contentType};base64,${Buffer.from(response.data).toString('base64')}`;
        }
        return imageInBase64;
    }
    async deleteBlobIfItExists(containerName, folderPath, fileName) {
        const options = {
            deleteSnapshots: 'include'
        };
        const filePath = folderPath + "/" + fileName;
        const blockBlobClient = await this.getBlockBlobClient(containerName, filePath);
        const blobDeleteIfExistsResponse = await blockBlobClient.deleteIfExists(options);
        if (blobDeleteIfExistsResponse.errorCode) {
            throw new common_1.InternalServerErrorException("could not delete file");
        }
        return { message: "file deleted successfully" };
    }
    async listFilesNameInFolder(containerName, folderPath) {
        let filesName = [];
        try {
            const containerClient = this.getContainerClient(containerName);
            const blobs = containerClient.listBlobsFlat();
            for await (const blob of blobs) {
                if (blob.name.includes(folderPath)) {
                    filesName.push(blob.name.split('/')[1]);
                }
            }
        }
        catch (error) {
            console.log(error);
            throw error;
        }
        return { Images: filesName };
    }
    async listBlobsInContainer(containerName) {
        let blobsName = [];
        try {
            const containerClient = this.getContainerClient(containerName);
            const blobs = containerClient.listBlobsFlat();
            for await (const blob of blobs) {
                blobsName.push(blob.name);
            }
        }
        catch (error) {
            console.log(error);
            throw error;
        }
        return { blobs: blobsName };
    }
};
exports.FilesService = FilesService;
exports.FilesService = FilesService = __decorate([
    (0, common_1.Injectable)()
], FilesService);
//# sourceMappingURL=files.service.js.map