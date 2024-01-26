import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsNumber, IsPositive, IsString, Matches, MinLength } from 'class-validator';

export class CreatePersonaDto {
  @ApiProperty({
    example: 'Juan',
    description: 'Nombres',
    nullable: false,
  })
  @IsString()
  @MinLength(1)
  nombres: string;

  @ApiProperty({
    example: 'Pérez',
    description: 'Apellidos',
    nullable: false,
  })
  @IsString()
  @MinLength(1)
  apellidos: string;

  @ApiProperty({
    description: 'Rut/DNI',
    nullable: false,
    uniqueItems: true
  })
  @IsString()
  @Matches(/^\d{1,2}[\.]?\d{3}[\.]?\d{3}[-][0-9kK]{1}$/, {
    message: "Formato de Rut incorrecto"
  })
  rut: string;

  @ApiProperty({
    example: 'ejemplo@ejemplo.com',
    description: 'Correo electrónico',
    nullable: false,
    uniqueItems: true
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Contraseña',
    nullable: false,
  })
  @IsString()
  @MinLength(8, { message: "La contraseña debe tener al menos 8 caracteres"})
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'La contraseña debe tener al menos una mayúscula, una minúscula y un número'
  })
  password: string;

  @ApiProperty({
    example: 1,
    description: 'ID del rol',
    nullable: false,
  })
  @IsNumber()
  @IsPositive()
  rolFK: number;

  @ApiProperty({
    example: 'YYYY-MM-DD',
    description: 'Fecha de nacimiento',
  })
  @IsDateString({ strict: true })
  //@MaxDate(new Date())
  fechaNacimiento: Date;

  @ApiProperty({
    example: 'Calle X 123',
    description: 'Dirección',
  })
  @IsString()
  @MinLength(3)
  direccion: string;

  @ApiProperty({
    example: 6,
    description: 'ID de la ciudad',
    nullable: false,
  })
  @IsNumber()
  @IsPositive()
  ciudadFK: number;

  @ApiProperty({
    example: '+56 9 12345678',
    description: 'Teléfono',
  })
  @IsString()
  //@MinLength(8, { message: "El número de teléfono debe tener al menos 8 caracteres"})
  //@MaxLength(13, { message: "El número de teléfono puede tener como máximo 12 caracteres"})
  @Matches(/^[\+]?56[\s]?9[\s]?[\d]{4}[\s]?[\d]{4}$/, {
    message: 'Formato de número de teléfono incorrecto'
  })
  telefono: string;

  // @ApiProperty({
  //   description: 'Url de la foto de perfil',
  // })
  // readonly path: string;
}