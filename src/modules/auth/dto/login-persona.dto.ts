import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Matches, MinLength } from 'class-validator';

export class LoginPersonaDto {
  @ApiProperty({
    example: 'ejemplo@ejemplo.com',
    description: 'Correo electrónico',
    nullable: false,
  })
  @IsEmail()
  readonly email: string;
  //TODO: juntar con request-change-password.dto.ts porque son iguales

  /*@IsString()
  @MinLength(8, { message: "La contraseña debe tener al menos 8 caracteres"})
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'La contraseña debe tener al menos una mayúscula, una minúscula y un número'
  })
  readonly password: string;*/
}