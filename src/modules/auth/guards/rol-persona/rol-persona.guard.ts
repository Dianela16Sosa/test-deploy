import { Reflector } from '@nestjs/core';
import { BadRequestException, CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { META_ROLES } from '../../decorators/role-protected.decorator';

@Injectable()
export class RolPersonaGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector
  ) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const validRoles: string[] = this.reflector.get(META_ROLES, context.getHandler());
    console.log("Roles válidos:", { validRoles });
    if (!validRoles || validRoles.length === 0) return true; //Cualquier persona puede pasar

    const req = context.switchToHttp().getRequest();
    const persona = req.user;

    if (!persona) throw new BadRequestException("No existe el usuario");

    console.log("Roles de la persona:", persona.Rol);
    //for (const role of persona.Rol) {
      if (validRoles.includes(persona.Rol)) {
        return true;
      }
    //}
    
    throw new ForbiddenException(
      `${ persona.Nombres } ${ persona.Apellidos } necesita roles válidos: [${ validRoles }]`);
  }
}
