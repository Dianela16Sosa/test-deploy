import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class VehiculoPersona {
  @ApiProperty({
    example: 1,
    description: 'Vehiculo Persona ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn()
  PersonVehiculoPK: number;

  @ApiProperty({
    example: 1,
    description: '',
    uniqueItems: true,
  })
  @Column('int', { unique: true })
  VehiculoFK: number;

  @ApiProperty({
    example: 1,
    description: '',
    uniqueItems: true,
  })
  @Column('int', { unique: true })
  PersonaFK: number;

  @ApiProperty({
    example: 1,
    description: 'Propietario actual',
  })
  @Column('smallint')
  PropietarioActual: number;

  @ApiProperty({
    example: 'DD/MM/YYYY',
    description: 'Fecha publicacion',
  })
  @Column('date')
  FechaCompra: Date;

  @ApiProperty({
    example: 1,
    description: '',
    uniqueItems: true,
  })
  @Column('int', { unique: true })
  EstadoFK: number;

}
