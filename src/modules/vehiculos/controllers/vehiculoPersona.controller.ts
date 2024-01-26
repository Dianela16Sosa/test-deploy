import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { VehiculoPersonaService } from '../services/vehiculoPersona.service';
import { CreateVehiculoPersonaDto } from '../dto/vehiculoPersona/create-vehiculo-persona.dto';
import { VehiculoPersona } from '../entities/vehiculoPersona.entity';
import { ChangePublicationStatusDto } from '../dto/vehiculoPersona/change-publication-status.dto';

@ApiTags('Vehículo Persona')
@Controller('vehiculo-persona')
export class VehiculoPersonaController {
  constructor(
    private readonly VehiculoPersonaService: VehiculoPersonaService,
  ) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Person Vehicle was created',
    type: VehiculoPersona,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createVehiculoPersonaDto: CreateVehiculoPersonaDto) {
    return this.VehiculoPersonaService.create(createVehiculoPersonaDto);
  }

  @Get('natural/:id')
  findAllWithImagesPersona(@Param('id', ParseIntPipe) id: number) {
    return this.VehiculoPersonaService.findAllWithImagesPersona(id);
  }

  @Patch('change-status')
  @ApiResponse({ status: 400, description: 'Bad request' })
  changePublicationStatus(
    @Body() changePublicationStatusDto: ChangePublicationStatusDto,
  ) {
    return this.VehiculoPersonaService.changePublicationStatus(
      changePublicationStatusDto,
    );
  }
}
