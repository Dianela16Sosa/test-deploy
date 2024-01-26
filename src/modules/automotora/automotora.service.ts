import { CreateAutomotoraDto } from './dto/create-automotora.dto';
import { UpdateAutomotoraDto } from './dto/update-automotora.dto';
import { DatabaseService } from 'src/modules/database/database.service';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { DuplicateEntry, NotFoundError } from 'src/common/errors/error';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AutomotoraService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createAutomotoraDto: CreateAutomotoraDto) {
    try{
      const { automotora, telefono, direccion, email, password, ciudadFK, adminName, adminLastName,extension} = createAutomotoraDto;
      const imageContainer = 'perfil-automotora';
      const imageName = `${imageContainer}-${ uuid() }`+extension;

      const result = await this.databaseService.callStoredProc('sp_insertar_tb_concesionario', [
        automotora, telefono, direccion, email, password, imageName, ciudadFK, adminName, adminLastName
      ]);

      const id = result[0][0].id;

      if (id === '0') throw new DuplicateEntry("Esta automotora ya existe", 123);

      delete createAutomotoraDto.password;

      return {...createAutomotoraDto, imageName,imageContainer};
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    try {
      const result = await this.databaseService.callStoredProc(
        'sp_listar_concesionarios',
        [],
      );
      return result[0][0].ConcesionariosDetallados;
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }


  findOne(id: number) {
    return `This action returns a #${id} automotora`;
  }

  async getVehiculoByAutomotora(AutomotoraPK: number){
    try{
      const result = await this.databaseService.callStoredProc('sp_listar_vehiculos_concesionarias', [AutomotoraPK]);
      return result[0][0].VehiculosPorConcesionaria;
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async getVendedoresByAutomotora(AutomotoraPK: number){
    try{
      
      const result = await this.databaseService.callStoredProc('sp_listar_vendedores_concesionarias', [AutomotoraPK]);
      return result[0][0].VendedoresPorConcesionaria;
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async update(id: number, updateAutomotoraDto: UpdateAutomotoraDto) {
    const { automotora, telefono, direccion, ciudadFK} = updateAutomotoraDto;
    const imageContainer = 'perfil-automotora';
    try{
      const result = await this.databaseService.callStoredProc('sp_modificar_tb_concesionario', [
        id, automotora,direccion, telefono, ciudadFK
      ]);

      return {id,...updateAutomotoraDto,imageContainer};
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} automotora`;
  }

  async eliminarAutomotora(id: number) {
    try {
      const result = await this.databaseService.callStoredProc('sp_eliminar_tb_concesionario', [id]);
      console.log(result);
      
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  private handleDBExceptions(error: any): never {
    if (error.errno === 1062 || error.errno === 1452) {
      throw new BadRequestException(error.sqlMessage);
    }

    if (error instanceof NotFoundError)
      throw new NotFoundException(error.message);

    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
