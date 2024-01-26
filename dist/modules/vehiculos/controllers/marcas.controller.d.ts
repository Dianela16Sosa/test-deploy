import { MarcasService } from '../services/marcas.service';
import { CreateMarcaDto, UpdateMarcaDto } from '../dto';
export declare class MarcasController {
    private readonly marcasService;
    constructor(marcasService: MarcasService);
    create(createMarcaDto: CreateMarcaDto): Promise<{
        marca: string;
        message: string;
    }>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: string, updateMarcaDto: UpdateMarcaDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
