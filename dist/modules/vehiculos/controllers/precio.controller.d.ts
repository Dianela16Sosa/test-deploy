import { PrecioService } from '../services/precio.service';
import { CreatePrecioDto } from '../dto/precio/create-precio.dto';
export declare class PrecioController {
    private readonly PrecioService;
    constructor(PrecioService: PrecioService);
    create(CreatePrecioDto: CreatePrecioDto): Promise<{
        precio: number;
        personaFK: number;
        vehiculoFK: number;
        id: any;
    }>;
}
