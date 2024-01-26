import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsPositive, IsString, Matches, Max, MaxDate, MaxLength, Min, MinLength, isNumber } from "class-validator";

export class CreateVehiculoDto {
  @ApiProperty({
    example: 'AA-BB-11',
    description: 'Patente del auto',
    uniqueItems: true,
    nullable: false,
  })
  @IsString()
  //@Matches(/(^[A-Z]{2}[1-9]{1}[0-9]{3}$) | (^[BCDFGHJKLPRSTVWXYZ]{4}[0-9]{2}$)/)
  patente: string;

  @ApiProperty({
    description: 'Chasis del auto',
    maxLength: 15,
    nullable: false,
  })
  @IsString()
  @MaxLength(15)
  chasis: string;

  @ApiProperty({
    description: 'Número de motor del auto',
    uniqueItems: true,
    maxLength: 15,
    nullable: false,
  })
  @IsString()
  @MaxLength(15)
  numeroMotor: string;

  @ApiProperty({
    example: 1,
    description: '',
    nullable: false,
  })
  @IsNumber()
  @IsPositive()
  modeloFK: number;
    
  @ApiProperty({
    example: '2020',
    description: 'Año del auto',
  })
  @IsNumber()
  @Max(new Date(Date.now()).getFullYear()) //Ver si funciona
  anio: number;

  @ApiProperty({
    example: '25000',
    description: 'Kilómetros recorridos por el auto',
  })
  @IsNumber()
  @IsPositive()
  kilometraje: number;

  @ApiProperty({
    example: '4',
    description: 'Cantidad de puertas que tiene el auto',
  })
  @IsNumber()
  @IsPositive()
  @Max(10)
  @IsOptional()
  numeroPuertas: number;

  @ApiProperty({
    example: '3',
    description: 'Cantidad de asientos que tiene el auto',
  })
  @IsNumber()
  @IsPositive()
  @Max(100)
  @IsOptional()
  numeroAsientos: number;

  @ApiProperty({
    description: 'Más información sobre al auto',
  })
  @IsString()
  @IsOptional()
  descripcion: string;

  @ApiProperty({
    description: 'Versión del auto',
  })
  @IsString()
  @MaxLength(100)
  version: string;

  @ApiProperty({
    example: '2',
    description: 'Cantidad de llaves',
  })
  @IsNumber()
  @IsOptional()
  cantidadLlaves: number;

  @ApiProperty({
    example: '2.0',
    description: 'Cilindrada',
  })
  @IsString()
  @MaxLength(10)
  cilindrada: string;

  @ApiProperty({
    example: 1,
    description: '',
    nullable: false,
  })
  @IsNumber()
  @IsPositive()
  tipoVehiculoFK: number;
  
  @ApiProperty({
    example: 1,
    description: '',
    nullable: false,
  })
  @IsNumber()
  @IsPositive()
  tipoCombustibleFK: number;

  @ApiProperty({
    example: 1,
    description: '',
    nullable: false,
  })
  @IsNumber()
  @IsPositive()
  transmisionFK: number;

  @ApiProperty({
    example: 1,
    description: '',
    nullable: false,
  })
  @IsNumber()
  @IsPositive()
  colorExteriorFK: number;

  @ApiProperty({
    example: 1,
    description: '',
    nullable: false,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  colorInteriorFK: number;

  @ApiProperty({
    example: 1,
    description: '',
    nullable: false,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  condicionVehiculoFK: number;

  @ApiProperty({
    example: 1,
    description: '',
    nullable: false,
  })
  @IsNumber()
  @IsPositive()
  traccionFK: number;

  
}
