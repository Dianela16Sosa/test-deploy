import { DatabaseService } from '../database/database.service';
export declare class UsuariosService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    findAll(): Promise<any>;
    handleDBExceptions(error: any): void;
    eliminarUsuario(id: number): Promise<void>;
}
