import { PartialType } from '@nestjs/swagger';
import { CreateVehiculoDto } from './create-vehiculo.dto';
import { IsNumber, IsOptional, IsPositive, IsString, Max, MaxLength, MinLength } from 'class-validator';

export class UpdateVehiculoDto extends PartialType(CreateVehiculoDto) {
    @IsString()
    @IsOptional()
    sku: string;

    @IsString()
    @IsOptional()
    ImagesFolderName: string;

}
