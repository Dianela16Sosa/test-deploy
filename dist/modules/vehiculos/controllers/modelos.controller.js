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
exports.ModelosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const modelos_service_1 = require("../services/modelos.service");
const modelo_entity_1 = require("../entities/modelo.entity");
const dto_1 = require("../dto");
const valid_roles_1 = require("../../auth/interfaces/valid-roles");
const decorators_1 = require("../../auth/decorators");
let ModelosController = class ModelosController {
    constructor(modelosService) {
        this.modelosService = modelosService;
    }
    create(createModeloDto) {
        return this.modelosService.create(createModeloDto);
    }
    findAll() {
        return this.modelosService.findAll();
    }
    findByMarca() {
        return this.modelosService.findByMarca();
    }
    findOne(id) {
        return this.modelosService.findOne(+id);
    }
    update(id, updateModeloDto) {
        return this.modelosService.update(+id, updateModeloDto);
    }
    remove(id) {
        return this.modelosService.remove(+id);
    }
};
exports.ModelosController = ModelosController;
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.Auth)(valid_roles_1.ValidRoles.admin),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Marca was created', type: modelo_entity_1.Modelo }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateModeloDto]),
    __metadata("design:returntype", void 0)
], ModelosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ModelosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/by-marca'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ModelosController.prototype, "findByMarca", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ModelosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, decorators_1.Auth)(valid_roles_1.ValidRoles.admin),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateModeloDto]),
    __metadata("design:returntype", void 0)
], ModelosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, decorators_1.Auth)(valid_roles_1.ValidRoles.admin),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ModelosController.prototype, "remove", null);
exports.ModelosController = ModelosController = __decorate([
    (0, swagger_1.ApiTags)('Modelos'),
    (0, common_1.Controller)('modelos'),
    __metadata("design:paramtypes", [modelos_service_1.ModelosService])
], ModelosController);
//# sourceMappingURL=modelos.controller.js.map