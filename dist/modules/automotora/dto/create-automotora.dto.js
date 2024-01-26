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
exports.CreateAutomotoraDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAutomotoraDto {
}
exports.CreateAutomotoraDto = CreateAutomotoraDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre compañia automotora',
        uniqueItems: true,
        nullable: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAutomotoraDto.prototype, "automotora", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Telefono compañia automotora',
        nullable: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAutomotoraDto.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ubicación compañia automotora',
        nullable: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAutomotoraDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email Administrador compañia automotora',
        uniqueItems: true,
        nullable: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAutomotoraDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Contraseña Administrador compañia automotora',
        nullable: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAutomotoraDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Extension Foto compañia automotora',
        nullable: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAutomotoraDto.prototype, "extension", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre administrador',
        nullable: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAutomotoraDto.prototype, "adminName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Apellido administrador',
        nullable: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAutomotoraDto.prototype, "adminLastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Codigo Ciudad',
        nullable: true,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", String)
], CreateAutomotoraDto.prototype, "ciudadFK", void 0);
//# sourceMappingURL=create-automotora.dto.js.map