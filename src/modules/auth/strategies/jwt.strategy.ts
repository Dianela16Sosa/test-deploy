import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { DataSource } from "typeorm";

import { JwtPayload } from "../interfaces/jwt.payload.interface";
import { DatabaseService } from "src/modules/database/database.service";
import { Persona } from "../entities/persona.entity";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly databaseService: DatabaseService
  ) {
    super({
      secretOrKey: "secret",
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload): Promise<Persona> {
    const { id } = payload;

    const result = await this.databaseService.callStoredProc('sp_listar_tb_persona_by_pk', [id]);

    const persona = result[0][0];
      
    if (!persona) throw new UnauthorizedException('Token inválido');

    if (!persona.isActive) throw new UnauthorizedException('Usuario inactivo');

    return persona;
  }
}