import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class CreateMarcaDto {
  @ApiProperty({
    description: 'Marca name',
    nullable: false,
    minLength: 1
  })
  @IsString({ message: "El nombre de la marca debe ser un string"})
  @MinLength(1)
  readonly marca: string;
}
