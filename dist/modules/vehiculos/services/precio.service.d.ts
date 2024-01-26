import { DatabaseService } from 'src/modules/database/database.service';
import { CreatePrecioDto } from '../dto/precio/create-precio.dto';
export declare class PrecioService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(CreatePrecioDto: CreatePrecioDto): Promise<{
        precio: number;
        personaFK: number;
        vehiculoFK: number;
        id: any;
    }>;
    private handleDBExceptions;
}
