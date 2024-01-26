import { ApiProperty } from "@nestjs/swagger";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Vehiculo {
  @ApiProperty({
    example: 1,
    description: 'ID del vehículo',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn()
  VehiculoPk: number;

  @ApiProperty({
    example: 'BMW/X1S/BLA/202',
    description: '',
    uniqueItems: true,
  })
  @Column('varchar')
  Sku: string;

  @ApiProperty({
    example: 'AA-BB-14',
    description: 'Patente del auto',
    uniqueItems: true,
    nullable: false,
  })
  @Column('varchar')
  Patente: string;

  @ApiProperty({
    description: 'Chasis del auto',
    maxLength: 15,
    nullable: false,
  })
  @Column('varchar')
  Chasis: string;

  @ApiProperty({
    description: 'Número de motor del auto',
    uniqueItems: true,
    maxLength: 15,
    nullable: false,
  })
  @Column('varchar')
  NumeroMotor: string;

  @ApiProperty({
    example: 1,
    description: '',
    nullable: false,
  })
  @Column('int')
  ModeloFK: number;

  @ApiProperty({
    description: 'Versión del auto',
  })
  @Column('varchar')
  Version: string;
    
  @ApiProperty({
    example: '2020',
    description: 'Año del auto',
  })
  @Column('smallint')
  Anio: number;

  @ApiProperty({
    example: '25000',
    description: 'Kilómetros recorridos por el auto',
  })
  @Column('int')
  Kilometraje: number;

  @ApiProperty({
    example: '4',
    description: 'Cantidad de puertas que tiene el auto',
  })
  @Column('smallint')
  NumeroPuertas: number;

  @ApiProperty({
    example: '3',
    description: 'Cantidad de asientos que tiene el auto',
  })
  @Column('smallint')
  NumeroAsientos: number;

  @ApiProperty({
    description: 'Más información sobre al auto',
  })
  @Column('text')
  Descripcion: string;

  @ApiProperty({
    example: '2',
    description: 'Cantidad de llaves',
  })
  @Column('smallint')
  CantidadLlaves: number;

  @ApiProperty({
    example: '2.0',
    description: '',
  })
  @Column('varchar')
  Cilindrada: string;

  @ApiProperty({
    example: 1,
    description: '',
    nullable: false,
  })
  @Column('int')
  TipoVehiculoFK: number;
  
  @ApiProperty({
    example: 1,
    description: '',
    nullable: false,
  })
  @Column('int')
  TipoCombustibleFK: number;

  @ApiProperty({
    example: 1,
    description: '',
    nullable: false,
  })
  @Column('int')
  TransmisionFK: number;

  @ApiProperty({
    example: 1,
    description: '',
    nullable: false,
  })
  @Column('int')
  ColorExteriorFK: number;

  @ApiProperty({
    example: 1,
    description: '',
    nullable: false,
  })
  @Column('int')
  ColorInteriorFK: number;

  @ApiProperty({
    example: 1,
    description: '',
    nullable: false,
  })
  @Column('int')
  CondicionVehiculoFK: number;

  @ApiProperty({
    example: '4WD',
    description: '',
    nullable: false,
  })
  @Column('int')
  TraccionFK: number;

  @ApiProperty({
    example: "vehicle-images-id",
    description: 'Nombre de la carpeta en Azure que tiene las imagenes del vehículo',
    maxLength: 100
  })
  @Column('varchar')
  ImageFolderName: string;

  @ApiProperty({
    example: true,
    description: 'Si el auto está activo en el sistema',
    default: true,
  })
  @Column('boolean')
  isActive: boolean;
}
