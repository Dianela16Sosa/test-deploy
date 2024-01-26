import { CreateAutomotoraDto } from './dto/create-automotora.dto';
import { UpdateAutomotoraDto } from './dto/update-automotora.dto';
import { DatabaseService } from 'src/modules/database/database.service';
export declare class AutomotoraService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createAutomotoraDto: CreateAutomotoraDto): Promise<{
        imageName: string;
        imageContainer: string;
        automotora: string;
        telefono: string;
        direccion: string;
        email: string;
        password: string;
        extension: string;
        adminName: string;
        adminLastName: string;
        ciudadFK: string;
    }>;
    findAll(): Promise<any>;
    findOne(id: number): string;
    getVehiculoByAutomotora(AutomotoraPK: number): Promise<any>;
    getVendedoresByAutomotora(AutomotoraPK: number): Promise<any>;
    update(id: number, updateAutomotoraDto: UpdateAutomotoraDto): Promise<{
        imageContainer: string;
        automotora?: string;
        telefono?: string;
        direccion?: string;
        email?: string;
        password?: string;
        extension?: string;
        adminName?: string;
        adminLastName?: string;
        ciudadFK?: string;
        id: number;
    }>;
    remove(id: number): string;
    eliminarAutomotora(id: number): Promise<void>;
    private handleDBExceptions;
}
