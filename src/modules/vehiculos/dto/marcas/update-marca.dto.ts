//import { PartialType } from '@nestjs/mapped-types';

import { PartialType } from '@nestjs/swagger';
import { CreateMarcaDto } from './create-marca.dto';
import { IsString, MinLength } from 'class-validator';

export class UpdateMarcaDto extends PartialType(CreateMarcaDto) {
    @IsString({message: "El nombre de la marca debe ser un string"})
    @MinLength(3)
    marca: string;
}
