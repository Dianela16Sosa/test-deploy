import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
//import { DataSource } from 'typeorm';
import { CreateCiudadDto, UpdateCiudadDto } from '../dto';
import { NotFoundError } from 'src/common/errors/error';
import { DatabaseService } from 'src/modules/database/database.service';


@Injectable()
export class CiudadesService {
  constructor(
    //private readonly dataSource: DataSource,
    private readonly databaseService: DatabaseService
  ) {}

  create(createCiudadeDto: CreateCiudadDto) {
    return 'This action adds a new ciudade';
  }

  async findAll() {
    try {
      const result = await this.databaseService.callStoredProc('sp_select_ciudad', []);
  
      if (result[0].length === 0) throw new NotFoundError('No se encontraron regiones y sus respectivas ciudades');
  
      return result[0];
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findByRegion() {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_region_ciudad', []);
      
      return result[0][0].CiudadByRegion;
    } catch(error) {
      console.log(error);

      this.handleDBExceptions(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} ciudade`;
  }

  update(id: number, updateCiudadeDto: UpdateCiudadDto) {
    return `This action updates a #${id} ciudade`;
  }

  remove(id: number) {
    return `This action removes a #${id} ciudade`;
  }

  /*private async callStoredProc(spName: string, params: any[]): Promise<any> {
    const query = `CALL ${spName}(${params.map(() => '?').join(', ')})`;

    return await this.dataSource.query(query, params);
  }*/

  private handleDBExceptions(error: any): never {
    if (error instanceof NotFoundError) throw new NotFoundException(error.message);

    if (error.errno === 1062) throw new BadRequestException(error.sqlMessage);

    throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
