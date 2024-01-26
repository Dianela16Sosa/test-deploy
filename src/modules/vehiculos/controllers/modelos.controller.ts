import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ModelosService } from '../services/modelos.service';
import { Modelo } from '../entities/modelo.entity';
import { CreateModeloDto, UpdateModeloDto } from '../dto';
import { ValidRoles } from '../../auth/interfaces/valid-roles';
import { Auth } from '../../auth/decorators';

@ApiTags('Modelos')
@Controller('modelos')
export class ModelosController {
  constructor(private readonly modelosService: ModelosService) {}

  @Post()
  @Auth(ValidRoles.admin)
  @ApiResponse({ status: 201, description: 'Marca was created', type: Modelo })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createModeloDto: CreateModeloDto) {
    return this.modelosService.create(createModeloDto);
  }

  @Get()
  findAll() {
    return this.modelosService.findAll();
  }

  @Get('/by-marca')
  findByMarca() {
    return this.modelosService.findByMarca();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.modelosService.findOne(+id);
  }

  @Patch(':id')
  @Auth(ValidRoles.admin)
  update(@Param('id') id: string, @Body() updateModeloDto: UpdateModeloDto) {
    return this.modelosService.update(+id, updateModeloDto);
  }

  @Delete(':id')
  @Auth(ValidRoles.admin)
  remove(@Param('id') id: string) {
    return this.modelosService.remove(+id);
  }
}
