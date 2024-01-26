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
exports.PrecioService = void 0;
const common_1 = require("@nestjs/common");
const error_1 = require("../../../common/errors/error");
const database_service_1 = require("../../database/database.service");
let PrecioService = class PrecioService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async create(CreatePrecioDto) {
        try {
            const { precio, personaFK, vehiculoFK } = CreatePrecioDto;
            const result = await this.databaseService.callStoredProc('sp_insertar_tb_precio', [precio, personaFK, vehiculoFK]);
            console.log(result);
            const id = result[0][0].id;
            return { id, ...CreatePrecioDto };
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    handleDBExceptions(error) {
        if (error.errno === 1062 || error.errno === 1452) {
            throw new common_1.BadRequestException(error.sqlMessage);
        }
        if (error instanceof error_1.NotFoundError)
            throw new common_1.NotFoundException(error.message);
        throw new common_1.InternalServerErrorException('Unexpected error, check server logs');
    }
};
exports.PrecioService = PrecioService;
exports.PrecioService = PrecioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], PrecioService);
//# sourceMappingURL=precio.service.js.map