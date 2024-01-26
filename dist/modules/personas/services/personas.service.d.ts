import { DatabaseService } from 'src/modules/database/database.service';
import { FilesService } from 'src/modules/files/files.service';
export declare class PersonasService {
    private readonly databaseService;
    private fileService;
    constructor(databaseService: DatabaseService, fileService: FilesService);
    findOne(id: number): Promise<any>;
    private handleDBExceptions;
}
