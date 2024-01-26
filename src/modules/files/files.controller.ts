import {
  BadRequestException,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { v4 as uuid } from 'uuid';
import { multerOptions } from './config/multerOptions';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { ValidRoles } from '../auth/interfaces/valid-roles';
import { Auth } from '../auth/decorators';

@ApiTags('Archivos')
@Controller('files')
export class FilesController {

  imgContainers: string[] = [
    'perfil-usuario',
    'perfil-automotora'
    // ADD AS NEEDED
  ];

  constructor(private readonly filesService: FilesService) {}

  @Post('vehicle-images')
  @UseInterceptors(FilesInterceptor('images', 10, multerOptions))
  async uploadVehicleImage(@UploadedFiles() files: Express.Multer.File[]) {
    console.log(files);

    if (!files) throw new BadRequestException('');

    //El contenedor es 'vehiculos' y dentro de él se crean carpetas para guardar las imagenes de cada auto
    const folderPath = `vehicle-images-${uuid()}`;
    console.log(folderPath);

    //Llamar a servicio de vehículos para modificar el campo de la url en la base de datos

    return await this.filesService.uploadFiles('vehiculos', folderPath, files);
  }

  @Patch('vehicle-images/:folder')
  @UseInterceptors(FilesInterceptor('images', 10, multerOptions))
  async updateVehicleImages(
    @UploadedFiles() files: Express.Multer.File[],
    @Param('folder') folderPath: string,
  ) {
    console.log(files);

    return await this.filesService.uploadFiles('vehiculos', folderPath, files);
  }

  @Get('vehicle-images/:folder')
  async getVehicleImages(@Param('folder') folderPath: string) {
    return await this.filesService.downloadVehicleImages(
      'vehiculos',
      folderPath,
    );
  }

  @Get(':container/:folder')
  async getFilesNameInFolder(
    @Param('container') containerName: string,
    @Param('folder') folderPath: string,
  ) {
    return await this.filesService.listFilesNameInFolder(
      containerName,
      folderPath,
    );
  }

  @Delete(':container')
  async deleteContainer(@Param('container') containerName: string) {
    return await this.filesService.deleteContainer(containerName);
  }

  @Delete('vehicle-images/:folder/:image')
  async deleteVehicleImage(
    @Param('folder') folderPath: string,
    @Param('image') fileName: string,
  ) {
    return await this.filesService.deleteBlobIfItExists(
      'vehiculos',
      folderPath,
      fileName,
    );
  }

  /*@Post('foto-perfil')
  @UseInterceptors(FilesInterceptor('images', 1, multerOptions))
  async uploadUserImage(@UploadedFiles() files: Express.Multer.File) {
    console.log(files);

    if (!files) throw new BadRequestException('');

    //El contenedor es 'perfil usuario' y dentro de él se crean carpetas para guardar las imagenes de cada auto
    const folderPath = `foto-perfil-${uuid()}`;
    console.log(folderPath);

    //Llamar a servicio de perfil usuario para modificar el campo de la url en la base de datos

    return await this.filesService.uploadFile(
      'perfil-usuario',
      folderPath,
      files,
    );
  }*/

  @Post('foto-perfil/:image')
  @UseInterceptors(FileInterceptor('image', multerOptions))
  async uploadUserImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('image') imageName: string) {
    console.log(file);

    if (!file) throw new BadRequestException('');

    //El contenedor es 'perfil usuario' y dentro de él se crean carpetas para guardar las imagenes de cada auto
    //! No se necesitan crear carpetas porque cada usuario va a tener solo una foto de perfil
    //const folderPath = `foto-perfil-${uuid()}`;
    //console.log(folderPath);

    return await this.filesService.uploadFile('perfil-usuario', file, imageName);
  }

  @Post('uploadImage/:container/:image')
  @UseInterceptors(FileInterceptor('image', multerOptions))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('container') containerName: string,
    @Param('image') imageName: string){
      if (!file) throw new BadRequestException('No file attached');
      if(!this.imgContainers.includes(containerName)) throw new BadRequestException('Invalid Container');
      return await this.filesService.uploadFile(containerName, file, imageName);
  }

  @Get('downloadImage/:container/:image')
  async downloadImage(
    @Param('container') containerName: string,
    @Param('image') imageName: string){
      return await this.filesService.downloadFile(containerName,imageName);
  }

  /*@Patch('foto-perfil/:folder')
  @UseInterceptors(FilesInterceptor('images', 1, multerOptions))
  async updateUserImages(
    @UploadedFiles() files: Express.Multer.File[],
    @Param('folder') folderPath: string,
  ) {
    // Asumiendo que solo se sube un archivo, ya que el límite es 1 en FilesInterceptor
    const file = files[0];
    return await this.filesService.uploadFile('perfil-usuario', folderPath, file);
  }*/

  @Get('foto-perfil/:folder')
  async getUserImages(@Param('folder') folderPath: string) {
    return await this.filesService.downloadFile(
      'perfil-usuario',
      folderPath,
    );
  }

  @Delete('foto-perfil/:folder/:image')
  async deleteUserImage(
    @Param('folder') folderPath: string,
    @Param('image') fileName: string,
  ) {
    return await this.filesService.deleteBlobIfItExists(
      'perfil-usuario',
      folderPath,
      fileName,
    );
  }
}
