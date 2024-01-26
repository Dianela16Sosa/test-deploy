import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive } from "class-validator";

export class ChangePublicationStatusDto {
  @ApiProperty({
    description:'Vehículo PK',
    nullable: false,
  })
  @IsNumber()
  @IsPositive()
  readonly vehiculoPK: number;

  @ApiProperty({
    description:'Persona PK',
    nullable: false,
  })
  @IsNumber()
  @IsPositive()
  readonly personaPK: number;
  
  @ApiProperty({
    description:'Estado PK',
    nullable: false,
  })
  @IsNumber()
  @IsPositive()
  readonly estadoPK: number;
}