import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'src/common/errors/error';
import { DatabaseService } from 'src/modules/database/database.service';
import { FilesService } from 'src/modules/files/files.service';

@Injectable()
export class PersonasService {
  constructor(
    private readonly databaseService: DatabaseService,
    private fileService: FilesService
  ) {}

  async findOne(id: number) {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_nombre_telefono_persona_by_pk', [id]);
      const persona = result[0][0];

      if (!persona) throw new NotFoundError('No se encontró un usuario con ese identificador.');

      /*let fotoPerfil: string = "";

      if (persona.PathIMG) {
        fotoPerfil = await this.fileService.downloadFile("perfil-usuario", persona.PathIMG);
      }*/

      return {
        ...persona
        //PathIMG: fotoPerfil
      }
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  private handleDBExceptions(error: any): never {
    if (error instanceof NotFoundError) throw new NotFoundException(error.message);

    if (error.errno === 1062) throw new BadRequestException(error.sqlMessage);

    throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}