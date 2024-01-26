import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @ApiProperty({
    description: 'Contraseña',
    nullable: false,
  })
  @IsString()
  @MinLength(8, { message: "La contraseña debe tener al menos 8 caracteres"})
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'La contraseña debe tener al menos una mayúscula, una minúscula y un número'
  })
  readonly password: string;
}