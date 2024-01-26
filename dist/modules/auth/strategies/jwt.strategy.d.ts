import { Strategy } from 'passport-jwt';
import { JwtPayload } from "../interfaces/jwt.payload.interface";
import { DatabaseService } from "src/modules/database/database.service";
import { Persona } from "../entities/persona.entity";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    validate(payload: JwtPayload): Promise<Persona>;
}
export {};
