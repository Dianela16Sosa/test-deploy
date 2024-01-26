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
exports.CreateVehiculoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateVehiculoDto {
}
exports.CreateVehiculoDto = CreateVehiculoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'AA-BB-11',
        description: 'Patente del auto',
        uniqueItems: true,
        nullable: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateVehiculoDto.prototype, "patente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Chasis del auto',
        maxLength: 15,
        nullable: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(15),
    __metadata("design:type", String)
], CreateVehiculoDto.prototype, "chasis", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número de motor del auto',
        uniqueItems: true,
        maxLength: 15,
        nullable: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(15),
    __metadata("design:type", String)
], CreateVehiculoDto.prototype, "numeroMotor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: '',
        nullable: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateVehiculoDto.prototype, "modeloFK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2020',
        description: 'Año del auto',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Max)(new Date(Date.now()).getFullYear()),
    __metadata("design:type", Number)
], CreateVehiculoDto.prototype, "anio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '25000',
        description: 'Kilómetros recorridos por el auto',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateVehiculoDto.prototype, "kilometraje", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '4',
        description: 'Cantidad de puertas que tiene el auto',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.Max)(10),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateVehiculoDto.prototype, "numeroPuertas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '3',
        description: 'Cantidad de asientos que tiene el auto',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateVehiculoDto.prototype, "numeroAsientos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Más información sobre al auto',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVehiculoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Versión del auto',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateVehiculoDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'Cantidad de llaves',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateVehiculoDto.prototype, "cantidadLlaves", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2.0',
        description: 'Cilindrada',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], CreateVehiculoDto.prototype, "cilindrada", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: '',
        nullable: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateVehiculoDto.prototype, "tipoVehiculoFK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: '',
        nullable: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateVehiculoDto.prototype, "tipoCombustibleFK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: '',
        nullable: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateVehiculoDto.prototype, "transmisionFK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: '',
        nullable: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateVehiculoDto.prototype, "colorExteriorFK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: '',
        nullable: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateVehiculoDto.prototype, "colorInteriorFK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: '',
        nullable: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateVehiculoDto.prototype, "condicionVehiculoFK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: '',
        nullable: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateVehiculoDto.prototype, "traccionFK", void 0);
//# sourceMappingURL=create-vehiculo.dto.js.map