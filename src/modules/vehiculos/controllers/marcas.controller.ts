import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MarcasService } from '../services/marcas.service';
import { Marca } from '../entities/marca.entity';
import { CreateMarcaDto, UpdateMarcaDto } from '../dto';
import { ValidRoles } from '../../auth/interfaces/valid-roles';
import { Auth } from '../../auth/decorators';

@ApiTags('Marcas')
@Controller('marcas')
export class MarcasController {
  constructor(private readonly marcasService: MarcasService) {}
  //@SetMetadata('roles', ['Administrador'])

  //@RoleProtected(ValidRoles.admin)
  //@UseGuards(AuthGuard(), RolPersonaGuard) //Usa la estrategia de Passpoort

  @Post()
  @Auth(ValidRoles.admin)
  @ApiResponse({ status: 201, description: 'Marca was created', type: Marca })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createMarcaDto: CreateMarcaDto) {
    return this.marcasService.create(createMarcaDto);
  }

  @Get()
  findAll() {
    return this.marcasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.marcasService.findOne(+id);
  }

  @Patch(':id')
  @Auth(ValidRoles.admin)
  update(@Param('id') id: string, @Body() updateMarcaDto: UpdateMarcaDto) {
    return this.marcasService.update(+id, updateMarcaDto);
  }

  @Delete(':id')
  @Auth(ValidRoles.admin)
  remove(@Param('id') id: string) {
    return this.marcasService.remove(+id);
  }
}
