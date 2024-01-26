import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
//import { DataSource } from 'typeorm';
import { CreateModeloDto, UpdateModeloDto } from '../dto';
import { DatabaseService } from 'src/modules/database/database.service';
import { DuplicateEntry } from 'src/common/errors/error';

@Injectable()
export class ModelosService {
  constructor(
    //private readonly dataSource: DataSource,
    private readonly databaseService: DatabaseService
  ) {}

  async create(createModeloDto: CreateModeloDto) {
    try {
      const { modelo, marcaFK } = createModeloDto;

      const result = await this.databaseService.callStoredProc('sp_insertar_tb_modelo', [
        modelo,
        marcaFK,
      ]);
      //TODO: falta realizar bien la comparacion del sp result para el mensaje, hay que revisar el sp y la comparacion
      const modelo_exists = result[0][0].sp_result;
      if (modelo_exists ==='0') throw new DuplicateEntry("El modelo ya existe",123)
      console.log(result)
      return {
        createModeloDto,
        message:`Se ha creado correctamente el Modelo: ${modelo}`
      }
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_tb_modelo', []);

      return result[0];
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async findByMarca() {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_marca_modelo', []);

      return result[0][0].ModeloByMarca;
    } catch(error) {
      console.log(error);

      this.handleDBExceptions(error);
    }
  }

  findOne(id: number) {
    // const result = this.result.find( res => res.id === arg0)
    // if (!result )throw new Error('Method not implemented.');
    return `This action updates a #${id} MODELITO`;

  }

  async update(id: number, updateModeloDto: UpdateModeloDto) {
    const {modelo} =updateModeloDto
    try{
      const result = await this.databaseService.callStoredProc('sp_modificar_tb_modelo',[id,modelo]);
      console.log(result)
      return {
        updateModeloDto,
        message: `Se ha editado correctamente el modelo: ${modelo}`
      };
    }catch(error){
      this.handleDBExceptions(error);
    }

  }

  async remove(id: number) {
    try{
      const result = await this.databaseService.callStoredProc('sp_eliminar_tb_modelo',[id]);
      console.log(" ACAAAAA",result)
      return {
        message: `Se ha eliminado correctamente`
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