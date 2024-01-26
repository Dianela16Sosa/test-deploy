"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolPersonaGuard = void 0;
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const role_protected_decorator_1 = require("../../decorators/role-protected.decorator");
let RolPersonaGuard = class RolPersonaGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const validRoles = this.reflector.get(role_protected_decorator_1.META_ROLES, context.getHandler());
        console.log("Roles válidos:", { validRoles });
        if (!validRoles || validRoles.length === 0)
            return true;
        const req = context.switchToHttp().getRequest();
        const persona = req.user;
        if (!persona)
            throw new common_1.BadRequestException("No existe el usuario");
        console.log("Roles de la persona:", persona.Rol);
        if (validRoles.includes(persona.Rol)) {
            return true;
        }
        throw new common_1.ForbiddenException(`${persona.Nombres} ${persona.Apellidos} necesita roles válidos: [${validRoles}]`);
    }
};
exports.RolPersonaGuard = RolPersonaGuard;
exports.RolPersonaGuard = RolPersonaGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RolPersonaGuard);
//# sourceMappingURL=rol-persona.guard.js.map