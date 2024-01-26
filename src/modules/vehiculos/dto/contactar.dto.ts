import { IsNumber, IsPositive } from "class-validator";

export class ContactarDto {
  @IsNumber()
  @IsPositive()
  vehiculoPK: number;

  @IsNumber()
  @IsPositive()
  personaPK: number;
}