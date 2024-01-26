import { ModelosService } from '../services/modelos.service';
import { CreateModeloDto, UpdateModeloDto } from '../dto';
export declare class ModelosController {
    private readonly modelosService;
    constructor(modelosService: ModelosService);
    create(createModeloDto: CreateModeloDto): Promise<{
        createModeloDto: CreateModeloDto;
        message: string;
    }>;
    findAll(): Promise<any>;
    findByMarca(): Promise<any>;
    findOne(id: number): string;
    update(id: string, updateModeloDto: UpdateModeloDto): Promise<{
        updateModeloDto: UpdateModeloDto;
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
