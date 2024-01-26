import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive } from "class-validator";

export class CreateVehiculoPersonaDto{
  @ApiProperty({
    description:'Vehiculo FK',
    nullable:false,
  })
  @IsNumber()
  @IsPositive()
  readonly vehiculoFK: number;

  @ApiProperty({
    description:'Persona FK',
    nullable:false,
  })
  @IsNumber()
  @IsPositive()
  readonly personaFK: number;
}