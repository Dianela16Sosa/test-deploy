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
exports.CreateModeloDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateModeloDto {
}
exports.CreateModeloDto = CreateModeloDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Modelo name',
        nullable: false,
        minLength: 3
    }),
    (0, class_validator_1.IsString)({ message: "El nombre del modelo debe ser un string" }),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], CreateModeloDto.prototype, "modelo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Marca FK',
        nullable: false
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateModeloDto.prototype, "marcaFK", void 0);
//# sourceMappingURL=create-modelo.dto.js.map