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
exports.VehiculoPersona = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
class VehiculoPersona {
}
exports.VehiculoPersona = VehiculoPersona;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Vehiculo Persona ID',
        uniqueItems: true,
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VehiculoPersona.prototype, "PersonVehiculoPK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: '',
        uniqueItems: true,
    }),
    (0, typeorm_1.Column)('int', { unique: true }),
    __metadata("design:type", Number)
], VehiculoPersona.prototype, "VehiculoFK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: '',
        uniqueItems: true,
    }),
    (0, typeorm_1.Column)('int', { unique: true }),
    __metadata("design:type", Number)
], VehiculoPersona.prototype, "PersonaFK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Propietario actual',
    }),
    (0, typeorm_1.Column)('smallint'),
    __metadata("design:type", Number)
], VehiculoPersona.prototype, "PropietarioActual", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'DD/MM/YYYY',
        description: 'Fecha publicacion',
    }),
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], VehiculoPersona.prototype, "FechaCompra", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: '',
        uniqueItems: true,
    }),
    (0, typeorm_1.Column)('int', { unique: true }),
    __metadata("design:type", Number)
], VehiculoPersona.prototype, "EstadoFK", void 0);
//# sourceMappingURL=vehiculoPersona.entity.js.map