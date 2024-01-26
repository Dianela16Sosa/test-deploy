import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Persona {
  @PrimaryGeneratedColumn()
  PersonaPK: number;
  
  @Column('varchar', { nullable: false })
  Nombres: string;

  @Column('varchar', { nullable: false })
  Apellidos: string;

  @Column('varchar', { nullable: false, unique: true })
  Rut: string;

  @Column('varchar', { nullable: false, unique: true })
  Email: string;

  @Column('int', { nullable: false })
  RolPK: number;

  @Column('date')
  FechaNacimiento: number;

  @Column('varchar')
  Direccion: string;

  @Column('int', { nullable: false })
  CiudadFK: number;

  @Column('varchar')
  Fono: string;

  @Column('varchar', { nullable: true })
  PathIMG: string;

  @Column('boolean', { default: 0 })
  Confirmada: boolean;

  @Column('boolean', { default: 1 })
  isActive: boolean;
}