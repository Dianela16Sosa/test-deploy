import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { ChangePasswordDto, CreatePersonaDto, LoginPersonaDto, RequestChangePasswordDto } from './dto';
import { Auth, GetUser } from './decorators';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiResponse({ status: 201, description: 'Usuario registrado' })
  @ApiResponse({ status: 400, description: 'Correo electrónico o contraseña incorrectos' })
  registrar(@Body() createPersonaDto: CreatePersonaDto) {
    return this.authService.register(createPersonaDto);
  }

  @Post('login')
  @ApiResponse({ status: 200, description: 'Usuario encontrado' })
  @ApiResponse({ status: 401, description: 'Acceso no autorizado' })
  logIn(@Body() loginPersonaDto: LoginPersonaDto) {
    return this.authService.logIn(loginPersonaDto);
  }

  @Get('check-status')
  @Auth()
  checkAuthStatus(@GetUser() user) { //TODO: darle tipo a user
    return this.authService.checkAuthStatus(user);
  }

  @Get('check-token/:token')
  checkToken(@Param('token') token: string) {
    return this.authService.checkToken(token);
  }

  @Patch('confirm/:token')
  @ApiResponse({ status: 200, description: 'Correo electrónico confirmado' })
  @ApiResponse({ status: 400, description: 'Token inválido' })
  confirm(@Param('token') token: string) {
    return this.authService.confirm(token);
  }

  @Patch('change-password')
  @ApiResponse({ status: 200, description: 'Se solicitó correctamente el cambio de contraseña' })
  @ApiResponse({ status: 404, description: 'No existe el usuario' })
  requestPasswordChange(@Body() reqChangePasswordDto: RequestChangePasswordDto) {
    return this.authService.requestPasswordChange(reqChangePasswordDto);
  }

  @Patch('change-password/:token')
  @ApiResponse({ status: 200, description: 'Contraseña cambiada' })
  @ApiResponse({ status: 400, description: 'Token inválido' })
  changePassword(@Param('token') token: string, @Body() changePasswordDto: ChangePasswordDto) {
    return this.authService.changePassword(token, changePasswordDto);
  }

  @Get(':token')
  getPersona(@Param('token') token: string) {
    return this.authService.getPersona(token);
  }
}
