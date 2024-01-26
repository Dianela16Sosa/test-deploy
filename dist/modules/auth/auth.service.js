"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const error_1 = require("../../common/errors/error");
const database_service_1 = require("../database/database.service");
const generarId_1 = require("./helpers/generarId");
const files_service_1 = require("../files/files.service");
const uuid_1 = require("uuid");
let AuthService = class AuthService {
    constructor(jwtService, fileService, databaseService) {
        this.jwtService = jwtService;
        this.fileService = fileService;
        this.databaseService = databaseService;
    }
    async register(createPersonaDto) {
        const { nombres, apellidos, rut, email, password, rolFK, fechaNacimiento, direccion, ciudadFK, telefono } = createPersonaDto;
        const token = (0, generarId_1.generarId)();
        const imagesFolderName = `foto-perfil-${(0, uuid_1.v4)()}`;
        console.log(imagesFolderName);
        try {
            const result = await this.databaseService.callStoredProc('sp_insertar_tb_persona', [nombres, apellidos, rut, email, password, rolFK, fechaNacimiento, direccion, ciudadFK, this.formatPhone(telefono), imagesFolderName, token]);
            const persona_exists = result[0][0].sp_result;
            if (persona_exists === '0')
                throw new error_1.DuplicateEntry("El usuario ya existe", 123);
            delete createPersonaDto.password;
            return {
                personaPK: result[0][0].id,
                ...createPersonaDto,
                token,
                confirmada: false,
                isActive: true,
                message: "¡Usuario creado correctamente! Revisa tu email para confirmar tu cuenta.",
                imagesFolderName
            };
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async logIn(loginPersonaDto) {
        const { email } = loginPersonaDto;
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_tb_persona_by_email', [email]);
            const persona = result[0][0];
            if (!persona)
                throw new error_1.UnauthorizedError('El correo electrónico o la contraseña son incorrectos. Ingrese los datos nuevamente.', 111);
            if (!persona.Confirmada)
                throw new error_1.UnauthorizedError("El correo electrónico aún no ha sido confirmado.");
            let fotoPerfil = "";
            if (persona.PathIMG) {
                fotoPerfil = await this.fileService.downloadFile("perfil-usuario", persona.PathIMG);
            }
            return {
                ...persona,
                PathIMG: fotoPerfil,
                token: this.getJwtToken({ id: persona.PersonaPK })
            };
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async confirm(token) {
        try {
            const result = await this.databaseService.callStoredProc('sp_modificar_tb_persona_confirmada', [token]);
            const persona_exists = result[0][0].sp_result;
            if (persona_exists === '0')
                throw new error_1.InvalidTokenError("Token inválido", 124);
            return {
                message: "¡Correo electrónico confirmado correctamente!"
            };
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    async requestPasswordChange(reqChangePasswordDto) {
        const { email } = reqChangePasswordDto;
        const token = (0, generarId_1.generarId)();
        try {
            const result = await this.databaseService.callStoredProc('sp_modificar_tb_persona_token', [email, token]);
            const user_exists = result[0][0].sp_result;
            if (user_exists === '0')
                throw new error_1.NotFoundError("No existe un usuario con ese correo electrónico", 124);
            return {
                token,
                message: `Se ha enviado un correo electrónico a ${email} con las instrucciones para cambiar su contraseña.`
            };
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    async changePassword(token, changePasswordDto) {
        const { password } = changePasswordDto;
        try {
            const result = await this.databaseService.callStoredProc('sp_modificar_tb_persona_password', [password, token]);
            const persona_exists = result[0][0].sp_result;
            if (persona_exists === '0')
                throw new error_1.InvalidTokenError("Token inválido", 124);
            return {
                message: "¡Contraseña modificada correctamente!"
            };
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    async checkToken(token) {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_tb_persona_by_token', [token]);
            const persona_exists = result[0][0].sp_result;
            if (persona_exists === '0')
                throw new error_1.InvalidTokenError("Token inválido", 124);
            return {
                message: "Token válido"
            };
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    async checkAuthStatus(persona) {
        return {
            ...persona,
            token: this.getJwtToken({ id: persona.PersonaPK })
        };
    }
    async getPersona(token) {
        try {
            const { id } = this.jwtService.verify(token);
            console.log(id);
            const result = await this.databaseService.callStoredProc('sp_listar_tb_persona_by_pk', [id]);
            const persona = result[0][0];
            if (!persona)
                throw new error_1.NotFoundError("No se ha encontrado el usuario");
            let fotoPerfil = "";
            if (persona.PathIMG) {
                fotoPerfil = await this.fileService.downloadFile("perfil-usuario", persona.PathIMG);
            }
            return {
                ...persona,
                PathIMG: fotoPerfil,
            };
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    formatPhone(telefono) {
        let _telefono = "";
        if (telefono.includes("+", 0)) {
            _telefono = telefono.substring(1);
        }
        return _telefono.replaceAll(" ", "");
    }
    getJwtToken(payload) {
        return this.jwtService.sign(payload);
    }
    handleDBExceptions(error) {
        if (error instanceof error_1.NotFoundError)
            throw new common_1.NotFoundException(error.message);
        if (error.code === 123 || error.code === 124)
            throw new common_1.BadRequestException(error.message);
        if (error instanceof error_1.UnauthorizedError)
            throw new common_1.UnauthorizedException(error.message);
        throw new common_1.InternalServerErrorException('Unexpected error, check server logs');
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => files_service_1.FilesService))),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        files_service_1.FilesService,
        database_service_1.DatabaseService])
], AuthService);
//# sourceMappingURL=auth.service.js.map