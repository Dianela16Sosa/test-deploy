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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiudadesController = void 0;
const common_1 = require("@nestjs/common");
const ciudades_service_1 = require("../services/ciudades.service");
const dto_1 = require("../dto");
let CiudadesController = class CiudadesController {
    constructor(ciudadesService) {
        this.ciudadesService = ciudadesService;
    }
    create(createCiudadeDto) {
        return this.ciudadesService.create(createCiudadeDto);
    }
    findAll() {
        return this.ciudadesService.findAll();
    }
    findByRegion() {
        return this.ciudadesService.findByRegion();
    }
    findOne(id) {
        return this.ciudadesService.findOne(+id);
    }
    update(id, updateCiudadeDto) {
        return this.ciudadesService.update(+id, updateCiudadeDto);
    }
    remove(id) {
        return this.ciudadesService.remove(+id);
    }
};
exports.CiudadesController = CiudadesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateCiudadDto]),
    __metadata("design:returntype", void 0)
], CiudadesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CiudadesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('by-region'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CiudadesController.prototype, "findByRegion", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CiudadesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateCiudadDto]),
    __metadata("design:returntype", void 0)
], CiudadesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CiudadesController.prototype, "remove", null);
exports.CiudadesController = CiudadesController = __decorate([
    (0, common_1.Controller)('ciudades'),
    __metadata("design:paramtypes", [ciudades_service_1.CiudadesService])
], CiudadesController);
//# sourceMappingURL=ciudades.controller.js.map