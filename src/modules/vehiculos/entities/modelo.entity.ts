import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Modelo {
  @ApiProperty({
    example: 1,
    description: 'Modelo ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn()
  ModeloPk: number;

  @ApiProperty({
    example: 'Sedan',
    description: 'Modelo name',
    uniqueItems: true,
  })
  @Column('varchar', { unique: true })
  modelo: string;

  @ApiProperty({
    example: true,
    description: 'Modelo is active',
    default: true,
  })
  @Column('boolean')
  isActive: boolean;
}
