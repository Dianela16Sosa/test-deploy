import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateAutomotoraDto {
  @ApiProperty({
    description: 'Nombre compañia automotora',
    uniqueItems: true,
    nullable: false,
  })
  @IsString()
  automotora: string;

  @ApiProperty({
    description: 'Telefono compañia automotora',
    // maxLength: 15,
    nullable: false,
  })
  @IsString()
  telefono: string;

  @ApiProperty({
    description: 'Ubicación compañia automotora',
    nullable: false,
  })
  @IsString()
  direccion: string;

  @ApiProperty({
    description: 'Email Administrador compañia automotora',
    uniqueItems: true,
    nullable: false,
  })
  @IsString()
  email: string;

  @ApiProperty({
    description: 'Contraseña Administrador compañia automotora',
    nullable: false,
  })
  @IsString()
  password: string;

  @ApiProperty({
    description: 'Extension Foto compañia automotora',
    nullable: true,
  })
  @IsString()
  extension: string;

  @ApiProperty({
    description: 'Nombre administrador',
    nullable: false,
  })
  @IsString()
  adminName: string;

  @ApiProperty({
    description: 'Apellido administrador',
    nullable: false,
  })
  @IsString()
  adminLastName: string;

  @ApiProperty({
    description: 'Codigo Ciudad',
    nullable: true,
  })
  @IsNumber()
  ciudadFK: string;
}