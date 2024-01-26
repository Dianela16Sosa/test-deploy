import { DatabaseService } from 'src/modules/database/database.service';
import { CreateVehiculoPersonaDto } from '../dto/vehiculoPersona/create-vehiculo-persona.dto';
import { ChangePublicationStatusDto } from '../dto/vehiculoPersona/change-publication-status.dto';
import { FilesService } from 'src/modules/files/files.service';
export declare class VehiculoPersonaService {
    private fileService;
    private readonly databaseService;
    constructor(fileService: FilesService, databaseService: DatabaseService);
    create(createVehiculoPersonaDto: CreateVehiculoPersonaDto): Promise<{
        vehiculoFK: number;
        personaFK: number;
        id: any;
    }>;
    findAllWithImagesPersona(id: number): Promise<any[]>;
    changePublicationStatus(changePublicationStatusDto: ChangePublicationStatusDto): Promise<void>;
    private handleDBExceptions;
}
