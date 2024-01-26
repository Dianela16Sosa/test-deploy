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
exports.CreatePersonaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePersonaDto {
}
exports.CreatePersonaDto = CreatePersonaDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Juan',
        description: 'Nombres',
        nullable: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "nombres", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Pérez',
        description: 'Apellidos',
        nullable: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "apellidos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rut/DNI',
        nullable: false,
        uniqueItems: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^\d{1,2}[\.]?\d{3}[\.]?\d{3}[-][0-9kK]{1}$/, {
        message: "Formato de Rut incorrecto"
    }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "rut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'ejemplo@ejemplo.com',
        description: 'Correo electrónico',
        nullable: false,
        uniqueItems: true
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Contraseña',
        nullable: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
    (0, class_validator_1.Matches)(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'La contraseña debe tener al menos una mayúscula, una minúscula y un número'
    }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'ID del rol',
        nullable: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreatePersonaDto.prototype, "rolFK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'YYYY-MM-DD',
        description: 'Fecha de nacimiento',
    }),
    (0, class_validator_1.IsDateString)({ strict: true }),
    __metadata("design:type", Date)
], CreatePersonaDto.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Calle X 123',
        description: 'Dirección',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 6,
        description: 'ID de la ciudad',
        nullable: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreatePersonaDto.prototype, "ciudadFK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '+56 9 12345678',
        description: 'Teléfono',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[\+]?56[\s]?9[\s]?[\d]{4}[\s]?[\d]{4}$/, {
        message: 'Formato de número de teléfono incorrecto'
    }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "telefono", void 0);
//# sourceMappingURL=create-persona.dto.js.map