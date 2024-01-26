import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { NotFoundError } from 'src/common/errors/error';
import { DatabaseService } from 'src/modules/database/database.service';
import { CreateVehiculoPersonaDto } from '../dto/vehiculoPersona/create-vehiculo-persona.dto';
import { ChangePublicationStatusDto } from '../dto/vehiculoPersona/change-publication-status.dto';
import { FilesService } from 'src/modules/files/files.service';

@Injectable()
export class VehiculoPersonaService {
  constructor(
    private fileService: FilesService,
    private readonly databaseService: DatabaseService,
  ) {}

  async create(createVehiculoPersonaDto: CreateVehiculoPersonaDto) {
    try {
      const { vehiculoFK, personaFK } = createVehiculoPersonaDto;

      const result = await this.databaseService.callStoredProc(
        'sp_insertar_tb_vehiculo_persona',
        [vehiculoFK, personaFK],
      );

      console.log(result);
      const id = result[0][0].id;

      return { id, ...createVehiculoPersonaDto };
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async findAllWithImagesPersona(id: number) {
    try {
      const result = await this.databaseService.callStoredProc(
        'sp_listar_tb_vehiculo_persona_by_pk',
        [id],
      );
      const vehiculos = result[0];

      console.log(vehiculos);
      const vehiculosWithImages = await Promise.all(
        vehiculos.map(async (vehiculo) => {
          const { Images } = await this.fileService.downloadVehicleImages(
            'vehiculos',
            vehiculo.ImagesFolderName,
          );
          return { ...vehiculo, Images };
        }),
      );

      return vehiculosWithImages;
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }

  async changePublicationStatus(
    changePublicationStatusDto: ChangePublicationStatusDto,
  ) {
    try {
      const { vehiculoPK, personaPK, estadoPK } = changePublicationStatusDto;

      const result = await this.databaseService.callStoredProc(
        'sp_modificar_tb_vehiculo_persona_estado',
        [vehiculoPK, personaPK, estadoPK],
      );

      if (result[0][0].sp_result === 0)
        throw new NotFoundError(
          'No se pudo cambiar el estado de la publicación del vehículo.',
        );
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
