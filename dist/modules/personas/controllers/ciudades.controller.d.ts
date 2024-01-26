import { CiudadesService } from '../services/ciudades.service';
import { CreateCiudadDto, UpdateCiudadDto } from '../dto';
export declare class CiudadesController {
    private readonly ciudadesService;
    constructor(ciudadesService: CiudadesService);
    create(createCiudadeDto: CreateCiudadDto): string;
    findAll(): Promise<any>;
    findByRegion(): Promise<any>;
    findOne(id: string): string;
    update(id: string, updateCiudadeDto: UpdateCiudadDto): string;
    remove(id: string): string;
}
