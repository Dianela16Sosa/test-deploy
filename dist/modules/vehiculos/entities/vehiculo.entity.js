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
exports.Vehiculo = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
class Vehiculo {
}
exports.Vehiculo = Vehiculo;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'ID del vehículo',
        uniqueItems: true,
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Vehiculo.prototype, "VehiculoPk", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'BMW/X1S/BLA/202',
        description: '',
        uniqueItems: true,
    }),
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Vehiculo.prototype, "Sku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'AA-BB-14',
        description: 'Patente del auto',
        uniqueItems: true,
        nullable: false,
    }),
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Vehiculo.prototype, "Patente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Chasis del auto',
        maxLength: 15,
        nullable: false,
    }),
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Vehiculo.prototype, "Chasis", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número de motor del auto',
        uniqueItems: true,
        maxLength: 15,
        nullable: false,
    }),
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Vehiculo.prototype, "NumeroMotor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: '',
        nullable: false,
    }),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Vehiculo.prototype, "ModeloFK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Versión del auto',
    }),
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Vehiculo.prototype, "Version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2020',
        description: 'Año del auto',
    }),
    (0, typeorm_1.Column)('smallint'),
    __metadata("design:type", Number)
], Vehiculo.prototype, "Anio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '25000',
        description: 'Kilómetros recorridos por el auto',
    }),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Vehiculo.prototype, "Kilometraje", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '4',
        description: 'Cantidad de puertas que tiene el auto',
    }),
    (0, typeorm_1.Column)('smallint'),
    __metadata("design:type", Number)
], Vehiculo.prototype, "NumeroPuertas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '3',
        description: 'Cantidad de asientos que tiene el auto',
    }),
    (0, typeorm_1.Column)('smallint'),
    __metadata("design:type", Number)
], Vehiculo.prototype, "NumeroAsientos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Más información sobre al auto',
    }),
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Vehiculo.prototype, "Descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'Cantidad de llaves',
    }),
    (0, typeorm_1.Column)('smallint'),
    __metadata("design:type", Number)
], Vehiculo.prototype, "CantidadLlaves", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2.0',
        description: '',
    }),
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Vehiculo.prototype, "Cilindrada", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: '',
        nullable: false,
    }),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Vehiculo.prototype, "TipoVehiculoFK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: '',
        nullable: false,
    }),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Vehiculo.prototype, "TipoCombustibleFK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: '',
        nullable: false,
    }),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Vehiculo.prototype, "TransmisionFK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: '',
        nullable: false,
    }),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Vehiculo.prototype, "ColorExteriorFK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: '',
        nullable: false,
    }),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Vehiculo.prototype, "ColorInteriorFK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: '',
        nullable: false,
    }),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Vehiculo.prototype, "CondicionVehiculoFK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '4WD',
        description: '',
        nullable: false,
    }),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Vehiculo.prototype, "TraccionFK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "vehicle-images-id",
        description: 'Nombre de la carpeta en Azure que tiene las imagenes del vehículo',
        maxLength: 100
    }),
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Vehiculo.prototype, "ImageFolderName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: 'Si el auto está activo en el sistema',
        default: true,
    }),
    (0, typeorm_1.Column)('boolean'),
    __metadata("design:type", Boolean)
], Vehiculo.prototype, "isActive", void 0);
//# sourceMappingURL=vehiculo.entity.js.map