import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
//import { DataSource } from 'typeorm';
import { CreateMarcaDto, UpdateMarcaDto } from '../dto';
import { DatabaseService } from '../../database/database.service';

@Injectable()
export class MarcasService {
  constructor(
    //private readonly dataSource: DataSource,
    private readonly databaseService: DatabaseService
  ) {}

  async create(createMarcaDto: CreateMarcaDto) {
    try {
      const { marca } = createMarcaDto;

      const result = await this.databaseService.callStoredProc('sp_insertar_tb_marca', [
        marca
      ]);
      return { 
        marca,
        message:`Se ha creado correctamente la Marca: ${marca}`
      };
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_tb_marca', []);

      return result[0];
    } catch (error) {
      console.log(error);

      this.handleDBExceptions(error);
    }
  }

  async findOne(MarcaID: number) {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_tb_marca_por_id', [MarcaID]);
      return result[0];
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async update(id: number, updateMarcaDto: UpdateMarcaDto) {
    const {marca} =updateMarcaDto
    try{
      const result = await this.databaseService.callStoredProc('sp_modificar_tb_marca',[id,marca]);
      console.log(result)
      return{
        message: `Se ha editado correctamente: ${marca}`
      };
    }catch(error){
      this.handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    try{
      const result = await this.databaseService.callStoredProc('sp_eliminar_tb_marca',[id]);
      console.log(" ACAAAAA",result)
      return {
        message: `Se ha Eliminado correctamente`
      };
    }catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  /*private async callStoredProc(spName: string, params: any[]): Promise<any> {
    const query = `CALL ${spName}(${params.map(() => '?').join(', ')})`;
    return await this.dataSource.query(query, params);
  }*/

  private handleDBExceptions(error: any): never {
    if (error.errno === 1062) {
      throw new BadRequestException(error.sqlMessage);
    }

    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
  