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
import { VehiculosService } from '../services/vehiculos.service';
import { CreateVehiculoDto, UpdateModeloDto, UpdateVehiculoDto } from '../dto';
import { Vehiculo } from '../entities/vehiculo.entity';
import { ContactarDto } from '../dto/contactar.dto';
import { ValidRoles } from 'src/modules/auth/interfaces/valid-roles';
import { Auth } from 'src/modules/auth/decorators';

@ApiTags('Vehículos')
@Controller('vehiculos')
export class VehiculosController {
  constructor(private readonly vehiculosService: VehiculosService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Vehicle was created',
    type: Vehiculo,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createVehiculoDto: CreateVehiculoDto) {
    return this.vehiculosService.create(createVehiculoDto);
  }

  @Get()
  findAll() {
    return this.vehiculosService.findAll();
  }

  @Get('vehiculos-y-imagenes')
  findAllWithImages() {
    return this.vehiculosService.findAllWithImages();
  }

  @Get('vehiculos-completos')
  findAllWithImagesSeller() {
    return this.vehiculosService.findAllWithImagesSeller();
  }

  @Get('/tipo-combustible')
  findTipoCombustible() {
    return this.vehiculosService.findTipoCombustible();
  }

  @Get('transmision')
  findTransmision() {
    return this.vehiculosService.findTransmision();
  }
  @Get('marcas-vehiculo')
  findMarcaVehiculo() {
    return this.vehiculosService.findMarcaVehiculo();
  }

  @Get('condicion-vehiculo')
  findCondicionVehiculo() {
    return this.vehiculosService.findCondicionVehiculo();
  }

  @Get('colores')
  findColores() {
    return this.vehiculosService.findColores();
  }

  @Get('colores-hex')
  findColoresHex() {
    return this.vehiculosService.findColoresHex();
  }

  @Get('years')
  findVehiculoYears() {
    return this.vehiculosService.findVehiculoAnios();
  }

  @Get('tipo-vehiculo')
  findTipoTbVehiculo() {
    return this.vehiculosService.findTipoVehiculo();
  }

  @Get('traccion')
  findTraccion() {
    return this.vehiculosService.findTraccion();
  }

  @Get('cilindrada')
  getCilindradas() {
    return this.vehiculosService.getCilindradas();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.vehiculosService.findOne(id);
  }

  @Get('validar/:patente')
  getVehicleByPatente(@Param('patente') patente: string) {
    return this.vehiculosService.getVehicleByPatente(patente);
  }

  @Patch(':id')
  desactivarVehiculo(@Param('id', ParseIntPipe) id: number) {
    return this.vehiculosService.eliminarVehiculo(id);
  }

  @Patch('editar/:id')
  editarVehiculo(
    @Param('id') id: string,
    @Body() updateVehiculoDto: UpdateVehiculoDto,
  ) {
    return this.vehiculosService.editarVehiculo(+id, updateVehiculoDto);
  }

  @Post('contactar')
  @Auth(ValidRoles.particular)
  registrarIntentoContactar(@Body() contactarDto: ContactarDto) {
    return this.vehiculosService.registrarIntentoContactar(contactarDto);
  }
  /*@Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'Vehiculo fue Actualizado',
    
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateVehiculoDto: UpdateVehiculoDto) {
    return this.vehiculosService.editarVehiculo(id, updateVehiculoDto);
  }*/
}
