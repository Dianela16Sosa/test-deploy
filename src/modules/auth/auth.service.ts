import { BadRequestException, Inject, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException, forwardRef } from '@nestjs/common';
//import { DataSource } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt.payload.interface';
import { DuplicateEntry, InvalidTokenError, NotFoundError, UnauthorizedError } from 'src/common/errors/error';
import { DatabaseService } from '../database/database.service';
import { ChangePasswordDto, CreatePersonaDto, LoginPersonaDto, RequestChangePasswordDto } from './dto';
import { generarId } from './helpers/generarId';
import * as bcrypt from 'bcrypt';
import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { FilesService } from '../files/files.service';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    
    @Inject(forwardRef(() => FilesService))
    private fileService: FilesService,
    private readonly databaseService: DatabaseService
  ) {}
  
  async register(createPersonaDto: CreatePersonaDto) {
    const { nombres, apellidos, rut, email, password, rolFK, fechaNacimiento, direccion, ciudadFK, telefono } = createPersonaDto;

    const token: string = generarId(); //Token que se va a usar para la confirmación de cuenta y cambio de contraseña

    const imagesFolderName = `foto-perfil-${ uuid() }`; //! imageName
    console.log(imagesFolderName);

    try {
      const result = await this.databaseService.callStoredProc('sp_insertar_tb_persona', 
      [nombres, apellidos, rut, email, password, rolFK, fechaNacimiento, direccion, ciudadFK, this.formatPhone(telefono), imagesFolderName, token]);

      const persona_exists = result[0][0].sp_result;
      
      if (persona_exists === '0') throw new DuplicateEntry("El usuario ya existe", 123);

      delete createPersonaDto.password;
        
      //await this.mailService.sendUserConfirmation(user);

      return {
        personaPK: result[0][0].id,
        ...createPersonaDto,
        token,
        confirmada: false,
        isActive: true,
        message: "¡Usuario creado correctamente! Revisa tu email para confirmar tu cuenta.",
        imagesFolderName
      };
    } catch (error) {
      console.log(error);
      
      this.handleDBExceptions(error);
    }
  }

  async logIn(loginPersonaDto: LoginPersonaDto) {
    const { email } = loginPersonaDto;

    try {
      const result = await this.databaseService.callStoredProc('sp_listar_tb_persona_by_email', [email]);
      const persona = result[0][0];
      
      if (!persona) throw new UnauthorizedError('El correo electrónico o la contraseña son incorrectos. Ingrese los datos nuevamente.', 111);

      if (!persona.Confirmada) throw new UnauthorizedError("El correo electrónico aún no ha sido confirmado.");

      let fotoPerfil: string = "";

      if (persona.PathIMG) {
        fotoPerfil = await this.fileService.downloadFile("perfil-usuario", persona.PathIMG);
      }

      return {
        ...persona,
        PathIMG: fotoPerfil,
        token: this.getJwtToken({ id: persona.PersonaPK })
      }
    } catch (error) {
      console.log(error);
      
      this.handleDBExceptions(error);
    }
  }

  async confirm(token: string) {
    try {
      const result = await this.databaseService.callStoredProc('sp_modificar_tb_persona_confirmada', [token]);
      const persona_exists = result[0][0].sp_result;
      
      if (persona_exists === '0') throw new InvalidTokenError("Token inválido", 124);

      return {
        message: "¡Correo electrónico confirmado correctamente!"
      };
    } catch (error) { 
      this.handleDBExceptions(error);
    }
  }

  async requestPasswordChange(reqChangePasswordDto: RequestChangePasswordDto) {
    const { email } = reqChangePasswordDto;
    const token = generarId();

    try {
      const result = await this.databaseService.callStoredProc('sp_modificar_tb_persona_token', [email, token]);
      const user_exists = result[0][0].sp_result;

      if (user_exists === '0') throw new NotFoundError("No existe un usuario con ese correo electrónico", 124);

      //await this.mailService.sendChangePassword(email, token);

      return {
        token,
        message: `Se ha enviado un correo electrónico a ${ email } con las instrucciones para cambiar su contraseña.`
      };
    } catch (error) { 
      this.handleDBExceptions(error);
    }
  }

  async changePassword(token: string, changePasswordDto: ChangePasswordDto) {
    const { password } = changePasswordDto;

    try {
      const result = await this.databaseService.callStoredProc('sp_modificar_tb_persona_password', [password, token]);
      const persona_exists = result[0][0].sp_result;

      if (persona_exists === '0') throw new InvalidTokenError("Token inválido", 124);

      return {
        message: "¡Contraseña modificada correctamente!"
      };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async checkToken(token: string) {
    try {
      const result = await this.databaseService.callStoredProc('sp_listar_tb_persona_by_token', [token]);
      const persona_exists = result[0][0].sp_result;

      if (persona_exists === '0') throw new InvalidTokenError("Token inválido", 124);

      return {
        message: "Token válido"
      };
    } catch (error) { 
      this.handleDBExceptions(error);
    }
  }

  async checkAuthStatus(persona) {
    return {
      ...persona,
      token: this.getJwtToken({ id: persona.PersonaPK })
    };
  }

  async getPersona(token: string) {
    try {
      const { id } = this.jwtService.verify(token);
      console.log(id);

      const result = await this.databaseService.callStoredProc('sp_listar_tb_persona_by_pk', [id]);

      const persona = result[0][0];

      if (!persona) throw new NotFoundError("No se ha encontrado el usuario");

      let fotoPerfil: string = "";

      if (persona.PathIMG) {
        fotoPerfil = await this.fileService.downloadFile("perfil-usuario", persona.PathIMG);
      }

      return {
        ...persona,
        PathIMG: fotoPerfil,
      };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  private formatPhone(telefono: string) { //Para eliminar los espacios en blanco y el +
    let _telefono: string = ""; 

    if (telefono.includes("+", 0)) {
      _telefono = telefono.substring(1);
    }

    return _telefono.replaceAll(" ", ""); 
  }

  private getJwtToken(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }

  private handleDBExceptions(error: any): never {
    if (error instanceof NotFoundError) throw new NotFoundException(error.message);

    if (error.code === 123 || error.code === 124) throw new BadRequestException(error.message);

    if (error instanceof UnauthorizedError) throw new UnauthorizedException(error.message);
    
    throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
