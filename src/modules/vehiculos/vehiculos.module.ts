import { Module } from '@nestjs/common';
import { MarcasController } from './controllers/marcas.controller';
import { MarcasService } from './services/marcas.service';
import { ModelosController } from './controllers/modelos.controller';
import { ModelosService } from './services/modelos.service';
import { VehiculosController } from './controllers/vehiculos.controller';
import { VehiculosService } from './services/vehiculos.service';
import { VehiculoPersonaController } from './controllers/vehiculoPersona.controller';
import { VehiculoPersonaService } from './services/vehiculoPersona.service';
import { FilesModule } from '../files/files.module';
import { AppModule } from 'src/app.module';
import { AuthModule } from '../auth/auth.module';
import { PrecioController } from './controllers/precio.controller';
import { PrecioService } from './services/precio.service';

@Module({
  controllers: [
    MarcasController,
    ModelosController,
    VehiculosController,
    VehiculoPersonaController,
    PrecioController
  ],
  providers: [
    MarcasService,
    ModelosService,
    VehiculosService,
    VehiculoPersonaService,
    PrecioService
  ],
  //imports: [TypeOrmModule.forFeature([Vehiculo, Marca, Modelo])],
  imports: [
    FilesModule,
    AuthModule
  ],
})
export class VehiculosModule { }
