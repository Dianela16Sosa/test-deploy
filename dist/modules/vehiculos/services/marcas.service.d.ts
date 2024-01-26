import { CreateMarcaDto, UpdateMarcaDto } from '../dto';
import { DatabaseService } from '../../database/database.service';
export declare class MarcasService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createMarcaDto: CreateMarcaDto): Promise<{
        marca: string;
        message: string;
    }>;
    findAll(): Promise<any>;
    findOne(MarcaID: number): Promise<any>;
    update(id: number, updateMarcaDto: UpdateMarcaDto): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
    private handleDBExceptions;
}
