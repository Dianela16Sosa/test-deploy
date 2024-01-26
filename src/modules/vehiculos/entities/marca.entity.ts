import { ApiProperty } from "@nestjs/swagger";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Marca {
  @ApiProperty({
    example: 1,
    description: 'Marca ID',
    uniqueItems: true
  })
  @PrimaryGeneratedColumn()
  MarcaPk: number;

  @ApiProperty({
    example: 'Ford',
    description: 'Marca name',
    uniqueItems: true
  })
  @Column('varchar', { unique: true })
  marca: string;

  @ApiProperty({
    example: true,
    description: 'Marca is active',
    default: true
  })
  @Column('boolean')
  isActive: boolean;
}
