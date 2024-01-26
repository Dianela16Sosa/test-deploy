import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
//import { DataSource } from 'typeorm';
import { CreateVehiculoDto, UpdateVehiculoDto } from '../dto';
import { NotFoundError } from 'src/common/errors/error';
import { v4 as uuid } from 'uuid';
import { FilesService } from 'src/modules/files/files.service';
import * as fs from 'fs';
import { VehiculoAPI } from '../interfaces/vehiculo.interface';
import { DatabaseService } from 'src/modules/database/database.service';
import { ContactarDto } from '../dto/contactar.dto';

@Injectable()
export class VehiculosService { 
  constructor(
    //private readonly dataSource: DataSource,
    private fileService: FilesService,
    private readonly databaseService: DatabaseService
  ) {}

  async create(createVehiculoDto: CreateVehiculoDto) {
    try {
      const { anio, kilometraje, numeroPuertas, numeroAsientos, cantidadLlaves, descripcion, patente, chasis, 
        numeroMotor, version, cilindrada, tipoVehiculoFK, tipoCombustibleFK, transmisionFK, modeloFK, colorExteriorFK,
        colorInteriorFK, condicionVehiculoFK, traccionFK } = createVehiculoDto;
      
      const imagesFolderName = `vehicle-images-${ uuid() }`;
      console.log(imagesFolderName);

      const result = await this.databaseService.callStoredProc('sp_insertar_tb_vehiculo', [anio, kilometraje,
      numeroPuertas, numeroAsientos, cantidadLlaves, descripcion, patente, chasis, numeroMotor, version, cilindrada, tipoVehiculoFK, tipoCombustibleFK,
      transmisionFK, modeloFK, colorExteriorFK, colorInteriorFK, condicionVehiculoFK, traccionFK, imagesFolderName]);

      console.log(result);
      const id = result[0][0].id;

      return { id, ...createVehiculoDto, imagesFolderName };
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_tb_vehiculos', []);

      return result[0];
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async findAllWithImagesSeller() {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_tb_vehiculos_completo', []);
      const vehiculos = result[0];

      console.log(vehiculos);
      const vehiculosWithImages = await Promise.all(
        vehiculos.map(async (vehiculo) => {
          const { Images } = await this.fileService.downloadVehicleImages("vehiculos", vehiculo.ImagesFolderName);
          return { ...vehiculo, Images };
        })
      );

      return vehiculosWithImages;
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async findAllWithImages() {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_tb_vehiculos', []);
      const vehiculos = result[0];

      const vehiculosWithImages = await Promise.all(
        vehiculos.map(async (vehiculo) => {
          const { Images } = await this.fileService.downloadVehicleImages("vehiculos", vehiculo.ImagesFolderName);
          return { ...vehiculo, Images };
        })
      );

      //console.log(vehiculosWithImages);

      return vehiculosWithImages;
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async findTipoCombustible() {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_tb_tipo_combustible', []);

      return result[0][0].TipoCombustible;
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async findTransmision() {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_tb_transmision', []);

      return result[0][0].Transmisiones;
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }
  async findMarcaVehiculo() {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_marca_vehiculo', []);

      return result[0];
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async findCondicionVehiculo() {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_tb_condicion_vehiculo', []);

      return result[0][0].CondicionesVehiculo;
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async findColores() {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_tb_color', []);

      return result[0][0].Colores;
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async findColoresHex() {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_tb_colores_hex', []);

      return result[0][0].Colores;
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async findVehiculoAnios() {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_anio_vehiculo', []);

      return result[0][0].Anios;
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async findTipoVehiculo() {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_tb_tipo_vehiculo', []);

      return result[0][0].TiposVehiculo;
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  
  async findTraccion() {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_tb_traccion', []);

      return result[0][0].Tracciones;
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async getCilindradas() {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_tb_cilindrada', []);

      return result[0][0].Cilindradas;
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async eliminarVehiculo(id: number) {
    try {
      const result = await this.databaseService.callStoredProc('sp_eliminar_tb_vehiculo_por_PK', [id]);
      console.log(result);
      
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }


  async findOne(id: number) {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_tb_vehiculo_por_PK', [id]);
      //console.log(result);

      if (result[0][0] === undefined) throw new NotFoundError("Error: no se ha encontrado un vehículo con ese ID", 124);

      console.log(result);

      const { ImagesFolderName } = result[0][0];
      console.log(ImagesFolderName);

      const { Images } = await this.fileService.downloadVehicleImages("vehiculos", ImagesFolderName);

      return { ...result[0][0], Images };
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  getVehicleByPatente(patente: string) {
    const vehicle_json = fs.readFileSync('src/data/vehiculo.json', 'utf-8');
    const vehicle: VehiculoAPI = JSON.parse(vehicle_json);

    if (vehicle.patente !== patente) throw new NotFoundException("No se encontró un vehículo con esa patente");

    return vehicle;
  }

  async registrarIntentoContactar(contactarDto: ContactarDto) {
    const { vehiculoPK, personaPK } = contactarDto;

    try {
      await this.databaseService.callStoredProc('sp_insertar_tb_contactar', [personaPK, vehiculoPK]);
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async editarVehiculo(id: number, updateVehiculoDto: UpdateVehiculoDto) {

    const {
      anio,
      kilometraje,
      numeroPuertas,
      numeroAsientos,
      cantidadLlaves,
      descripcion,
      patente,
      chasis,
      numeroMotor,
      version,
      cilindrada,
      tipoVehiculoFK,
      tipoCombustibleFK,
      transmisionFK,
      modeloFK,
      colorExteriorFK,
      colorInteriorFK,
      condicionVehiculoFK,
      traccionFK,
      sku,
      ImagesFolderName,
    } = updateVehiculoDto;

    try {
      const result = await this.databaseService.callStoredProc('sp_modificar_tb_vehiculo', [
        id,
        anio,
        kilometraje,
        numeroPuertas,
        numeroAsientos,
        descripcion,
        patente,
        chasis,
        numeroMotor,
        tipoCombustibleFK,
        transmisionFK,
        modeloFK,
        colorExteriorFK,
        colorInteriorFK,
        condicionVehiculoFK,
        ImagesFolderName,
        traccionFK,
        cilindrada,
        sku,
        cantidadLlaves,
        version,
        tipoVehiculoFK,
      ]);
  
      console.log(result);
      return {message:"Se ha editado correctamente"}
      // Manejar el resultado del procedimiento almacenado según tus necesidades, 
      // por ejemplo, verificar si la modificación fue exitosa o manejar errores.
  
      // Devolver un mensaje de éxito, un código de estado o el resultado de la modificación, 
      // según lo que necesites en tu aplicación.
      return result; // Puedes devolver el resultado o un mensaje de éxito
    } catch (error) {

      console.log("Error en editar", error);
      return {message:"No se ha editado"}
      
      this.handleDBExceptions(error);
    }
  }
  







  /*private async callStoredProc(spName: string, params: any[]): Promise<any> {
    const query = `CALL ${spName}(${params.map(() => '?').join(', ')})`;
    return await this.dataSource.query(query, params);
  }*/

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