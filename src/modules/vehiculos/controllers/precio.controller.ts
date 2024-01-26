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

import { VehiculoPersona } from '../entities/vehiculoPersona.entity';
import { PrecioService } from '../services/precio.service';
import { CreatePrecioDto } from '../dto/precio/create-precio.dto';
import { Precio } from '../entities/precio.entity';

@ApiTags('Precio')
@Controller('precio')
export class PrecioController {
    constructor(private readonly PrecioService: PrecioService) { }

    @Post()
    @ApiResponse({
        status: 201,
        description: 'Price was created',
        type: Precio,
    })
    @ApiResponse({ status: 400, description: 'Bad request' })
    create(@Body() CreatePrecioDto: CreatePrecioDto) {
        return this.PrecioService.create(CreatePrecioDto);
    }

}
