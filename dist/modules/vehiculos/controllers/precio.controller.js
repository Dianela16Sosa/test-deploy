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
exports.PrecioController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const precio_service_1 = require("../services/precio.service");
const create_precio_dto_1 = require("../dto/precio/create-precio.dto");
const precio_entity_1 = require("../entities/precio.entity");
let PrecioController = class PrecioController {
    constructor(PrecioService) {
        this.PrecioService = PrecioService;
    }
    create(CreatePrecioDto) {
        return this.PrecioService.create(CreatePrecioDto);
    }
};
exports.PrecioController = PrecioController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Price was created',
        type: precio_entity_1.Precio,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_precio_dto_1.CreatePrecioDto]),
    __metadata("design:returntype", void 0)
], PrecioController.prototype, "create", null);
exports.PrecioController = PrecioController = __decorate([
    (0, swagger_1.ApiTags)('Precio'),
    (0, common_1.Controller)('precio'),
    __metadata("design:paramtypes", [precio_service_1.PrecioService])
], PrecioController);
//# sourceMappingURL=precio.controller.js.map