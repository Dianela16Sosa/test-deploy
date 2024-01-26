import { PartialType } from "@nestjs/mapped-types";
import { CreateModeloDto } from "./create-modelo.dto";
import { IsNumber,IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateModeloDto extends PartialType(CreateModeloDto) {
    @IsString({message: "El nombre del modelo debe ser un string"})
    @MinLength(3)
    modelo: string

    // @ApiProperty({
    //     description: 'Marca FK',
    //     nullable: false
    // })
    // @IsNumber()
    // marcaFK: number
}