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
exports.VehiculosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const vehiculos_service_1 = require("../services/vehiculos.service");
const dto_1 = require("../dto");
const vehiculo_entity_1 = require("../entities/vehiculo.entity");
const contactar_dto_1 = require("../dto/contactar.dto");
const valid_roles_1 = require("../../auth/interfaces/valid-roles");
const decorators_1 = require("../../auth/decorators");
let VehiculosController = class VehiculosController {
    constructor(vehiculosService) {
        this.vehiculosService = vehiculosService;
    }
    create(createVehiculoDto) {
        return this.vehiculosService.create(createVehiculoDto);
    }
    findAll() {
        return this.vehiculosService.findAll();
    }
    findAllWithImages() {
        return this.vehiculosService.findAllWithImages();
    }
    findAllWithImagesSeller() {
        return this.vehiculosService.findAllWithImagesSeller();
    }
    findTipoCombustible() {
        return this.vehiculosService.findTipoCombustible();
    }
    findTransmision() {
        return this.vehiculosService.findTransmision();
    }
    findMarcaVehiculo() {
        return this.vehiculosService.findMarcaVehiculo();
    }
    findCondicionVehiculo() {
        return this.vehiculosService.findCondicionVehiculo();
    }
    findColores() {
        return this.vehiculosService.findColores();
    }
    findColoresHex() {
        return this.vehiculosService.findColoresHex();
    }
    findVehiculoYears() {
        return this.vehiculosService.findVehiculoAnios();
    }
    findTipoTbVehiculo() {
        return this.vehiculosService.findTipoVehiculo();
    }
    findTraccion() {
        return this.vehiculosService.findTraccion();
    }
    getCilindradas() {
        return this.vehiculosService.getCilindradas();
    }
    findOne(id) {
        return this.vehiculosService.findOne(id);
    }
    getVehicleByPatente(patente) {
        return this.vehiculosService.getVehicleByPatente(patente);
    }
    desactivarVehiculo(id) {
        return this.vehiculosService.eliminarVehiculo(id);
    }
    editarVehiculo(id, updateVehiculoDto) {
        return this.vehiculosService.editarVehiculo(+id, updateVehiculoDto);
    }
    registrarIntentoContactar(contactarDto) {
        return this.vehiculosService.registrarIntentoContactar(contactarDto);
    }
};
exports.VehiculosController = VehiculosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Vehicle was created',
        type: vehiculo_entity_1.Vehiculo,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateVehiculoDto]),
    __metadata("design:returntype", void 0)
], VehiculosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehiculosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('vehiculos-y-imagenes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehiculosController.prototype, "findAllWithImages", null);
__decorate([
    (0, common_1.Get)('vehiculos-completos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehiculosController.prototype, "findAllWithImagesSeller", null);
__decorate([
    (0, common_1.Get)('/tipo-combustible'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehiculosController.prototype, "findTipoCombustible", null);
__decorate([
    (0, common_1.Get)('transmision'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehiculosController.prototype, "findTransmision", null);
__decorate([
    (0, common_1.Get)('marcas-vehiculo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehiculosController.prototype, "findMarcaVehiculo", null);
__decorate([
    (0, common_1.Get)('condicion-vehiculo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehiculosController.prototype, "findCondicionVehiculo", null);
__decorate([
    (0, common_1.Get)('colores'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehiculosController.prototype, "findColores", null);
__decorate([
    (0, common_1.Get)('colores-hex'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehiculosController.prototype, "findColoresHex", null);
__decorate([
    (0, common_1.Get)('years'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehiculosController.prototype, "findVehiculoYears", null);
__decorate([
    (0, common_1.Get)('tipo-vehiculo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehiculosController.prototype, "findTipoTbVehiculo", null);
__decorate([
    (0, common_1.Get)('traccion'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehiculosController.prototype, "findTraccion", null);
__decorate([
    (0, common_1.Get)('cilindrada'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehiculosController.prototype, "getCilindradas", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VehiculosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('validar/:patente'),
    __param(0, (0, common_1.Param)('patente')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VehiculosController.prototype, "getVehicleByPatente", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VehiculosController.prototype, "desactivarVehiculo", null);
__decorate([
    (0, common_1.Patch)('editar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateVehiculoDto]),
    __metadata("design:returntype", void 0)
], VehiculosController.prototype, "editarVehiculo", null);
__decorate([
    (0, common_1.Post)('contactar'),
    (0, decorators_1.Auth)(valid_roles_1.ValidRoles.particular),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contactar_dto_1.ContactarDto]),
    __metadata("design:returntype", void 0)
], VehiculosController.prototype, "registrarIntentoContactar", null);
exports.VehiculosController = VehiculosController = __decorate([
    (0, swagger_1.ApiTags)('Vehículos'),
    (0, common_1.Controller)('vehiculos'),
    __metadata("design:paramtypes", [vehiculos_service_1.VehiculosService])
], VehiculosController);
//# sourceMappingURL=vehiculos.controller.js.map