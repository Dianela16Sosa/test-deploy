"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const role_protected_decorator_1 = require("./role-protected.decorator");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const rol_persona_guard_1 = require("../guards/rol-persona/rol-persona.guard");
function Auth(...roles) {
    return (0, common_1.applyDecorators)((0, role_protected_decorator_1.RoleProtected)(...roles), (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), rol_persona_guard_1.RolPersonaGuard), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }));
}
exports.Auth = Auth;
//# sourceMappingURL=auth.decorator.js.map