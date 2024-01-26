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
exports.Modelo = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
class Modelo {
}
exports.Modelo = Modelo;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Modelo ID',
        uniqueItems: true,
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Modelo.prototype, "ModeloPk", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Sedan',
        description: 'Modelo name',
        uniqueItems: true,
    }),
    (0, typeorm_1.Column)('varchar', { unique: true }),
    __metadata("design:type", String)
], Modelo.prototype, "modelo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: 'Modelo is active',
        default: true,
    }),
    (0, typeorm_1.Column)('boolean'),
    __metadata("design:type", Boolean)
], Modelo.prototype, "isActive", void 0);
//# sourceMappingURL=modelo.entity.js.map