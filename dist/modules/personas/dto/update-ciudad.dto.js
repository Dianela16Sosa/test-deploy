"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCiudadDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_ciudad_dto_1 = require("./create-ciudad.dto");
class UpdateCiudadDto extends (0, swagger_1.PartialType)(create_ciudad_dto_1.CreateCiudadDto) {
}
exports.UpdateCiudadDto = UpdateCiudadDto;
//# sourceMappingURL=update-ciudad.dto.js.map