import { AuthService } from './auth.service';
import { ChangePasswordDto, CreatePersonaDto, LoginPersonaDto, RequestChangePasswordDto } from './dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registrar(createPersonaDto: CreatePersonaDto): Promise<{
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
    checkAuthStatus(user: any): Promise<any>;
    checkToken(token: string): Promise<{
        message: string;
    }>;
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
    getPersona(token: string): Promise<any>;
}
