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
exports.MarcasController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const marcas_service_1 = require("../services/marcas.service");
const marca_entity_1 = require("../entities/marca.entity");
const dto_1 = require("../dto");
const valid_roles_1 = require("../../auth/interfaces/valid-roles");
const decorators_1 = require("../../auth/decorators");
let MarcasController = class MarcasController {
    constructor(marcasService) {
        this.marcasService = marcasService;
    }
    create(createMarcaDto) {
        return this.marcasService.create(createMarcaDto);
    }
    findAll() {
        return this.marcasService.findAll();
    }
    findOne(id) {
        return this.marcasService.findOne(+id);
    }
    update(id, updateMarcaDto) {
        return this.marcasService.update(+id, updateMarcaDto);
    }
    remove(id) {
        return this.marcasService.remove(+id);
    }
};
exports.MarcasController = MarcasController;
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.Auth)(valid_roles_1.ValidRoles.admin),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Marca was created', type: marca_entity_1.Marca }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateMarcaDto]),
    __metadata("design:returntype", void 0)
], MarcasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MarcasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MarcasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, decorators_1.Auth)(valid_roles_1.ValidRoles.admin),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateMarcaDto]),
    __metadata("design:returntype", void 0)
], MarcasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, decorators_1.Auth)(valid_roles_1.ValidRoles.admin),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarcasController.prototype, "remove", null);
exports.MarcasController = MarcasController = __decorate([
    (0, swagger_1.ApiTags)('Marcas'),
    (0, common_1.Controller)('marcas'),
    __metadata("design:paramtypes", [marcas_service_1.MarcasService])
], MarcasController);
//# sourceMappingURL=marcas.controller.js.map