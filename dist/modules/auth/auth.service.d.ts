import { JwtService } from '@nestjs/jwt';
import { DatabaseService } from '../database/database.service';
import { ChangePasswordDto, CreatePersonaDto, LoginPersonaDto, RequestChangePasswordDto } from './dto';
import { FilesService } from '../files/files.service';
export declare class AuthService {
    private readonly jwtService;
    private fileService;
    private readonly databaseService;
    constructor(jwtService: JwtService, fileService: FilesService, databaseService: DatabaseService);
    register(createPersonaDto: CreatePersonaDto): Promise<{
        token: string;
        confirmada: boolean;
        isActive: boolean;
        message: string;
        imagesFolderName: string;
        nombres: string;
        apellidos: string;
        rut: string;
        email: string;
        password: string;
        rolFK: number;
        fechaNacimiento: Date;
        direccion: string;
        ciudadFK: number;
        telefono: string;
        personaPK: any;
    }>;
    logIn(loginPersonaDto: LoginPersonaDto): Promise<any>;
    confirm(token: string): Promise<{
        message: string;
    }>;
    requestPasswordChange(reqChangePasswordDto: RequestChangePasswordDto): Promise<{
        token: string;
        message: string;
    }>;
    changePassword(token: string, changePasswordDto: ChangePasswordDto): Promise<{
        message: string;
    }>;
    checkToken(token: string): Promise<{
        message: string;
    }>;
    checkAuthStatus(persona: any): Promise<any>;
    getPersona(token: string): Promise<any>;
    private formatPhone;
    private getJwtToken;
    private handleDBExceptions;
}
