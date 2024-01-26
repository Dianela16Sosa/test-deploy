/// <reference types="multer" />
import { FilesService } from './files.service';
export declare class FilesController {
    private readonly filesService;
    imgContainers: string[];
    constructor(filesService: FilesService);
    uploadVehicleImage(files: Express.Multer.File[]): Promise<{
        message: string;
    }>;
    updateVehicleImages(files: Express.Multer.File[], folderPath: string): Promise<{
        message: string;
    }>;
    getVehicleImages(folderPath: string): Promise<{
        Images: string[];
    }>;
    getFilesNameInFolder(containerName: string, folderPath: string): Promise<{
        Images: string[];
    }>;
    deleteContainer(containerName: string): Promise<{
        message: string;
    }>;
    deleteVehicleImage(folderPath: string, fileName: string): Promise<{
        message: string;
    }>;
    uploadUserImage(file: Express.Multer.File, imageName: string): Promise<{
        message: string;
    }>;
    uploadImage(file: Express.Multer.File, containerName: string, imageName: string): Promise<{
        message: string;
    }>;
    downloadImage(containerName: string, imageName: string): Promise<string>;
    getUserImages(folderPath: string): Promise<string>;
    deleteUserImage(folderPath: string, fileName: string): Promise<{
        message: string;
    }>;
}
