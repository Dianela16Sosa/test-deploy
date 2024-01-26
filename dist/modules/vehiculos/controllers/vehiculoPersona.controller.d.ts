import { VehiculoPersonaService } from '../services/vehiculoPersona.service';
import { CreateVehiculoPersonaDto } from '../dto/vehiculoPersona/create-vehiculo-persona.dto';
import { ChangePublicationStatusDto } from '../dto/vehiculoPersona/change-publication-status.dto';
export declare class VehiculoPersonaController {
    private readonly VehiculoPersonaService;
    constructor(VehiculoPersonaService: VehiculoPersonaService);
    create(createVehiculoPersonaDto: CreateVehiculoPersonaDto): Promise<{
        vehiculoFK: number;
        personaFK: number;
        id: any;
    }>;
    findAllWithImagesPersona(id: number): Promise<any[]>;
    changePublicationStatus(changePublicationStatusDto: ChangePublicationStatusDto): Promise<void>;
}
