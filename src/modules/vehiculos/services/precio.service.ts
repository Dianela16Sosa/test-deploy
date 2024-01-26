import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'src/common/errors/error';
import { FilesService } from 'src/modules/files/files.service';
import { DatabaseService } from 'src/modules/database/database.service';
import { CreatePrecioDto } from '../dto/precio/create-precio.dto';
@Injectable()
export class PrecioService{
    constructor(
        private readonly databaseService: DatabaseService
      ) {}

      async create(CreatePrecioDto: CreatePrecioDto) {
        try {
          const { precio, personaFK, vehiculoFK } = CreatePrecioDto;

          const result = await this.databaseService.callStoredProc('sp_insertar_tb_precio', [precio,personaFK, vehiculoFK]);
    
          console.log(result);
          const id = result[0][0].id;
    
          return { id, ...CreatePrecioDto};
        } catch (error) {
          console.log(error);
          this.handleDBExceptions(error);
        }
      }

      private handleDBExceptions(error: any): never {
        if (error.errno === 1062 || error.errno === 1452) {
          throw new BadRequestException(error.sqlMessage);
        }
    
        if (error instanceof NotFoundError) throw new NotFoundException(error.message);
    
        throw new InternalServerErrorException(
          'Unexpected error, check server logs',
        );
      }



}