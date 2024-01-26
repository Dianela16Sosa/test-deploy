import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PersonasService } from '../services/personas.service';

@ApiTags('Personas')
@Controller('personas')
export class PersonasController {
  constructor(private readonly personasService: PersonasService) {}

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.personasService.findOne(id);
  }
}