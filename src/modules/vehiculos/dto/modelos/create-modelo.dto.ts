import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateModeloDto {
  @ApiProperty({
    description: 'Modelo name',
    nullable: false,
    minLength:3
  })
  @IsString({message: "El nombre del modelo debe ser un string"})
  @MinLength(3)
  readonly modelo: string;

  @ApiProperty({
    description: 'Marca FK',
    nullable: false
  })
  @IsNumber()
  readonly marcaFK: number
}