import { PersonasService } from '../services/personas.service';
export declare class PersonasController {
    private readonly personasService;
    constructor(personasService: PersonasService);
    findOne(id: number): Promise<any>;
}
