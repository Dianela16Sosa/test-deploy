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
exports.UpdateModeloDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_modelo_dto_1 = require("./create-modelo.dto");
const class_validator_1 = require("class-validator");
class UpdateModeloDto extends (0, mapped_types_1.PartialType)(create_modelo_dto_1.CreateModeloDto) {
}
exports.UpdateModeloDto = UpdateModeloDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "El nombre del modelo debe ser un string" }),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], UpdateModeloDto.prototype, "modelo", void 0);
//# sourceMappingURL=update-modelo.dto.js.map