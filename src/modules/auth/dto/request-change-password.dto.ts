import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class RequestChangePasswordDto {
  @ApiProperty({
    example: 'ejemplo@ejemplo.com',
    description: 'Correo electrónico',
    nullable: false,
  })
  @IsEmail()
  readonly email: string;
}