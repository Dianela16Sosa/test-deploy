import { AutomotoraService } from './automotora.service';
import { CreateAutomotoraDto } from './dto/create-automotora.dto';
import { UpdateAutomotoraDto } from './dto/update-automotora.dto';
export declare class AutomotoraController {
    private readonly automotoraService;
    constructor(automotoraService: AutomotoraService);
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
    findAll(): Promise<any>;
    getVehicleByAutomotora(id: number): Promise<any>;
    getSellerByAutomotora(id: number): Promise<any>;
    DesactivarAutomotora(id: number): Promise<void>;
}
