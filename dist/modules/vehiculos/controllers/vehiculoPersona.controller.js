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
exports.VehiculoPersonaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const vehiculoPersona_service_1 = require("../services/vehiculoPersona.service");
const create_vehiculo_persona_dto_1 = require("../dto/vehiculoPersona/create-vehiculo-persona.dto");
const vehiculoPersona_entity_1 = require("../entities/vehiculoPersona.entity");
const change_publication_status_dto_1 = require("../dto/vehiculoPersona/change-publication-status.dto");
let VehiculoPersonaController = class VehiculoPersonaController {
    constructor(VehiculoPersonaService) {
        this.VehiculoPersonaService = VehiculoPersonaService;
    }
    create(createVehiculoPersonaDto) {
        return this.VehiculoPersonaService.create(createVehiculoPersonaDto);
    }
    findAllWithImagesPersona(id) {
        return this.VehiculoPersonaService.findAllWithImagesPersona(id);
    }
    changePublicationStatus(changePublicationStatusDto) {
        return this.VehiculoPersonaService.changePublicationStatus(changePublicationStatusDto);
    }
};
exports.VehiculoPersonaController = VehiculoPersonaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Person Vehicle was created',
        type: vehiculoPersona_entity_1.VehiculoPersona,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vehiculo_persona_dto_1.CreateVehiculoPersonaDto]),
    __metadata("design:returntype", void 0)
], VehiculoPersonaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('natural/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VehiculoPersonaController.prototype, "findAllWithImagesPersona", null);
__decorate([
    (0, common_1.Patch)('change-status'),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_publication_status_dto_1.ChangePublicationStatusDto]),
    __metadata("design:returntype", void 0)
], VehiculoPersonaController.prototype, "changePublicationStatus", null);
exports.VehiculoPersonaController = VehiculoPersonaController = __decorate([
    (0, swagger_1.ApiTags)('Vehículo Persona'),
    (0, common_1.Controller)('vehiculo-persona'),
    __metadata("design:paramtypes", [vehiculoPersona_service_1.VehiculoPersonaService])
], VehiculoPersonaController);
//# sourceMappingURL=vehiculoPersona.controller.js.map