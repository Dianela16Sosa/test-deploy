import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AutomotoraService } from './automotora.service';
import { CreateAutomotoraDto } from './dto/create-automotora.dto';
import { UpdateAutomotoraDto } from './dto/update-automotora.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Automotoras')
@Controller('automotora')
export class AutomotoraController {
  constructor(private readonly automotoraService: AutomotoraService) {}

  @Post()
  create(@Body() createAutomotoraDto: CreateAutomotoraDto) {
    return this.automotoraService.create(createAutomotoraDto);
  }

  @Patch('/update/:id')
  update(@Param('id',ParseIntPipe) id: number,@Body() updateAutomotoraDto: UpdateAutomotoraDto) {
    return this.automotoraService.update(id,updateAutomotoraDto)
  }

  @Get()
  findAll() {
    return this.automotoraService.findAll();
  }

  @Get(':id/vehiculos')
  getVehicleByAutomotora(@Param('id') id: number){
    console.log(id);
    return this.automotoraService.getVehiculoByAutomotora(id);
  }

  @Get(':id/vendedores')
  getSellerByAutomotora(@Param('id') id: number){
    return this.automotoraService.getVendedoresByAutomotora(id);
  }

  @Patch(':id')
  DesactivarAutomotora(@Param('id', ParseIntPipe) id: number) {
    return this.automotoraService.eliminarAutomotora(id);
  }
}
