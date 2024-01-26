import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Precio {
  @ApiProperty({
    example: 1,
    description: 'Precio ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn()
  PrecioPK: number;

  @ApiProperty({
    example: 'DD/MM/YYYY',
    description: 'Fecha publicacion',
  })
  @Column('date')
  FechaIngreso: Date;

  @ApiProperty({
    example: 1,
    description: 'Financiamiento',
  })
  @Column('smallint')
  Financiamiento: number;

  @ApiProperty({
    example: 1,
    description: '',
    uniqueItems: true,
  })
  @Column('int', { unique: true })
  PersonaFK: number;

  @ApiProperty({
    example: 1,
    description: '',
    uniqueItems: true,
  })
  @Column('int', { unique: true })
  FormaPagoFK: number;

  @ApiProperty({
    example: 1,
    description: '',
    uniqueItems: true,
  })
  @Column('int', { unique: true })
  VehiculoFK: number;

}
