"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const files_service_1 = require("./files.service");
const platform_express_1 = require("@nestjs/platform-express");
const uuid_1 = require("uuid");
const multerOptions_1 = require("./config/multerOptions");
const swagger_1 = require("@nestjs/swagger");
let FilesController = class FilesController {
    constructor(filesService) {
        this.filesService = filesService;
        this.imgContainers = [
            'perfil-usuario',
            'perfil-automotora'
        ];
    }
    async uploadVehicleImage(files) {
        console.log(files);
        if (!files)
            throw new common_1.BadRequestException('');
        const folderPath = `vehicle-images-${(0, uuid_1.v4)()}`;
        console.log(folderPath);
        return await this.filesService.uploadFiles('vehiculos', folderPath, files);
    }
    async updateVehicleImages(files, folderPath) {
        console.log(files);
        return await this.filesService.uploadFiles('vehiculos', folderPath, files);
    }
    async getVehicleImages(folderPath) {
        return await this.filesService.downloadVehicleImages('vehiculos', folderPath);
    }
    async getFilesNameInFolder(containerName, folderPath) {
        return await this.filesService.listFilesNameInFolder(containerName, folderPath);
    }
    async deleteContainer(containerName) {
        return await this.filesService.deleteContainer(containerName);
    }
    async deleteVehicleImage(folderPath, fileName) {
        return await this.filesService.deleteBlobIfItExists('vehiculos', folderPath, fileName);
    }
    async uploadUserImage(file, imageName) {
        console.log(file);
        if (!file)
            throw new common_1.BadRequestException('');
        return await this.filesService.uploadFile('perfil-usuario', file, imageName);
    }
    async uploadImage(file, containerName, imageName) {
        if (!file)
            throw new common_1.BadRequestException('No file attached');
        if (!this.imgContainers.includes(containerName))
            throw new common_1.BadRequestException('Invalid Container');
        return await this.filesService.uploadFile(containerName, file, imageName);
    }
    async downloadImage(containerName, imageName) {
        return await this.filesService.downloadFile(containerName, imageName);
    }
    async getUserImages(folderPath) {
        return await this.filesService.downloadFile('perfil-usuario', folderPath);
    }
    async deleteUserImage(folderPath, fileName) {
        return await this.filesService.deleteBlobIfItExists('perfil-usuario', folderPath, fileName);
    }
};
exports.FilesController = FilesController;
__decorate([
    (0, common_1.Post)('vehicle-images'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images', 10, multerOptions_1.multerOptions)),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uploadVehicleImage", null);
__decorate([
    (0, common_1.Patch)('vehicle-images/:folder'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images', 10, multerOptions_1.multerOptions)),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Param)('folder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "updateVehicleImages", null);
__decorate([
    (0, common_1.Get)('vehicle-images/:folder'),
    __param(0, (0, common_1.Param)('folder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "getVehicleImages", null);
__decorate([
    (0, common_1.Get)(':container/:folder'),
    __param(0, (0, common_1.Param)('container')),
    __param(1, (0, common_1.Param)('folder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "getFilesNameInFolder", null);
__decorate([
    (0, common_1.Delete)(':container'),
    __param(0, (0, common_1.Param)('container')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "deleteContainer", null);
__decorate([
    (0, common_1.Delete)('vehicle-images/:folder/:image'),
    __param(0, (0, common_1.Param)('folder')),
    __param(1, (0, common_1.Param)('image')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "deleteVehicleImage", null);
__decorate([
    (0, common_1.Post)('foto-perfil/:image'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', multerOptions_1.multerOptions)),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('image')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uploadUserImage", null);
__decorate([
    (0, common_1.Post)('uploadImage/:container/:image'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', multerOptions_1.multerOptions)),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('container')),
    __param(2, (0, common_1.Param)('image')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Get)('downloadImage/:container/:image'),
    __param(0, (0, common_1.Param)('container')),
    __param(1, (0, common_1.Param)('image')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "downloadImage", null);
__decorate([
    (0, common_1.Get)('foto-perfil/:folder'),
    __param(0, (0, common_1.Param)('folder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "getUserImages", null);
__decorate([
    (0, common_1.Delete)('foto-perfil/:folder/:image'),
    __param(0, (0, common_1.Param)('folder')),
    __param(1, (0, common_1.Param)('image')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "deleteUserImage", null);
exports.FilesController = FilesController = __decorate([
    (0, swagger_1.ApiTags)('Archivos'),
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [files_service_1.FilesService])
], FilesController);
//# sourceMappingURL=files.controller.js.map