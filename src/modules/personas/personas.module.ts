import { Module } from '@nestjs/common';
import { CiudadesController } from './controllers/ciudades.controller';
import { CiudadesService } from './services/ciudades.service';
import { PersonasController } from './controllers/personas.controller';
import { PersonasService } from './services/personas.service';
import { FilesModule } from '../files/files.module';

@Module({
  controllers: [CiudadesController, PersonasController],
  providers: [CiudadesService, PersonasService],
  imports: [FilesModule],
})
export class PersonasModule {}
