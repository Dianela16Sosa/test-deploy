import { CreateCiudadDto, UpdateCiudadDto } from '../dto';
import { DatabaseService } from 'src/modules/database/database.service';
export declare class CiudadesService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createCiudadeDto: CreateCiudadDto): string;
    findAll(): Promise<any>;
    findByRegion(): Promise<any>;
    findOne(id: number): string;
    update(id: number, updateCiudadeDto: UpdateCiudadDto): string;
    remove(id: number): string;
    private handleDBExceptions;
}
