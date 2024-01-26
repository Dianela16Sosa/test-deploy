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
exports.Persona = void 0;
const typeorm_1 = require("typeorm");
class Persona {
}
exports.Persona = Persona;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Persona.prototype, "PersonaPK", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: false }),
    __metadata("design:type", String)
], Persona.prototype, "Nombres", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: false }),
    __metadata("design:type", String)
], Persona.prototype, "Apellidos", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: false, unique: true }),
    __metadata("design:type", String)
], Persona.prototype, "Rut", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: false, unique: true }),
    __metadata("design:type", String)
], Persona.prototype, "Email", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { nullable: false }),
    __metadata("design:type", Number)
], Persona.prototype, "RolPK", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Number)
], Persona.prototype, "FechaNacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Persona.prototype, "Direccion", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { nullable: false }),
    __metadata("design:type", Number)
], Persona.prototype, "CiudadFK", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Persona.prototype, "Fono", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: true }),
    __metadata("design:type", String)
], Persona.prototype, "PathIMG", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { default: 0 }),
    __metadata("design:type", Boolean)
], Persona.prototype, "Confirmada", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { default: 1 }),
    __metadata("design:type", Boolean)
], Persona.prototype, "isActive", void 0);
//# sourceMappingURL=persona.entity.js.map