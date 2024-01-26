import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CiudadesService } from '../services/ciudades.service';
import { CreateCiudadDto, UpdateCiudadDto } from '../dto';

@Controller('ciudades')
export class CiudadesController {
  constructor(private readonly ciudadesService: CiudadesService) {}

  @Post()
  create(@Body() createCiudadeDto: CreateCiudadDto) {
    return this.ciudadesService.create(createCiudadeDto);
  }

  @Get()
  findAll() {
    return this.ciudadesService.findAll();
  }

  @Get('by-region')
  findByRegion() {
    return this.ciudadesService.findByRegion();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ciudadesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCiudadeDto: UpdateCiudadDto) {
    return this.ciudadesService.update(+id, updateCiudadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ciudadesService.remove(+id);
  }
}
