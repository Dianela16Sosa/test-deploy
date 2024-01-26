"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = void 0;
const common_1 = require("@nestjs/common");
exports.GetUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    const persona = req.user;
    if (!persona)
        throw new common_1.InternalServerErrorException('Usuario no encontrado');
    return (!data) ? persona : persona[data];
});
//# sourceMappingURL=get-user.decorator.js.map