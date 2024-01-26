import { CreateModeloDto, UpdateModeloDto } from '../dto';
import { DatabaseService } from 'src/modules/database/database.service';
export declare class ModelosService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createModeloDto: CreateModeloDto): Promise<{
        createModeloDto: CreateModeloDto;
        message: string;
    }>;
    findAll(): Promise<any>;
    findByMarca(): Promise<any>;
    findOne(id: number): string;
    update(id: number, updateModeloDto: UpdateModeloDto): Promise<{
        updateModeloDto: UpdateModeloDto;
        message: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
    private handleDBExceptions;
}
