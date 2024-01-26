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
exports.CiudadesService = void 0;
const common_1 = require("@nestjs/common");
const error_1 = require("../../../common/errors/error");
const database_service_1 = require("../../database/database.service");
let CiudadesService = class CiudadesService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    create(createCiudadeDto) {
        return 'This action adds a new ciudade';
    }
    async findAll() {
        try {
            const result = await this.databaseService.callStoredProc('sp_select_ciudad', []);
            if (result[0].length === 0)
                throw new error_1.NotFoundError('No se encontraron regiones y sus respectivas ciudades');
            return result[0];
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    async findByRegion() {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_region_ciudad', []);
            return result[0][0].CiudadByRegion;
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    findOne(id) {
        return `This action returns a #${id} ciudade`;
    }
    update(id, updateCiudadeDto) {
        return `This action updates a #${id} ciudade`;
    }
    remove(id) {
        return `This action removes a #${id} ciudade`;
    }
    handleDBExceptions(error) {
        if (error instanceof error_1.NotFoundError)
            throw new common_1.NotFoundException(error.message);
        if (error.errno === 1062)
            throw new common_1.BadRequestException(error.sqlMessage);
        throw new common_1.InternalServerErrorException('Unexpected error, check server logs');
    }
};
exports.CiudadesService = CiudadesService;
exports.CiudadesService = CiudadesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], CiudadesService);
//# sourceMappingURL=ciudades.service.js.map