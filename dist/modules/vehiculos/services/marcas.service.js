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
exports.MarcasService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../database/database.service");
let MarcasService = class MarcasService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async create(createMarcaDto) {
        try {
            const { marca } = createMarcaDto;
            const result = await this.databaseService.callStoredProc('sp_insertar_tb_marca', [
                marca
            ]);
            return {
                marca,
                message: `Se ha creado correctamente la Marca: ${marca}`
            };
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async findAll() {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_tb_marca', []);
            return result[0];
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async findOne(MarcaID) {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_tb_marca_por_id', [MarcaID]);
            return result[0];
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async update(id, updateMarcaDto) {
        const { marca } = updateMarcaDto;
        try {
            const result = await this.databaseService.callStoredProc('sp_modificar_tb_marca', [id, marca]);
            console.log(result);
            return {
                message: `Se ha editado correctamente: ${marca}`
            };
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    async remove(id) {
        try {
            const result = await this.databaseService.callStoredProc('sp_eliminar_tb_marca', [id]);
            console.log(" ACAAAAA", result);
            return {
                message: `Se ha Eliminado correctamente`
            };
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    handleDBExceptions(error) {
        if (error.errno === 1062) {
            throw new common_1.BadRequestException(error.sqlMessage);
        }
        throw new common_1.InternalServerErrorException('Unexpected error, check server logs');
    }
};
exports.MarcasService = MarcasService;
exports.MarcasService = MarcasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], MarcasService);
//# sourceMappingURL=marcas.service.js.map