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
exports.ModelosService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../database/database.service");
const error_1 = require("../../../common/errors/error");
let ModelosService = class ModelosService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async create(createModeloDto) {
        try {
            const { modelo, marcaFK } = createModeloDto;
            const result = await this.databaseService.callStoredProc('sp_insertar_tb_modelo', [
                modelo,
                marcaFK,
            ]);
            const modelo_exists = result[0][0].sp_result;
            if (modelo_exists === '0')
                throw new error_1.DuplicateEntry("El modelo ya existe", 123);
            console.log(result);
            return {
                createModeloDto,
                message: `Se ha creado correctamente el Modelo: ${modelo}`
            };
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async findAll() {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_tb_modelo', []);
            return result[0];
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async findByMarca() {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_marca_modelo', []);
            return result[0][0].ModeloByMarca;
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    findOne(id) {
        return `This action updates a #${id} MODELITO`;
    }
    async update(id, updateModeloDto) {
        const { modelo } = updateModeloDto;
        try {
            const result = await this.databaseService.callStoredProc('sp_modificar_tb_modelo', [id, modelo]);
            console.log(result);
            return {
                updateModeloDto,
                message: `Se ha editado correctamente el modelo: ${modelo}`
            };
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    async remove(id) {
        try {
            const result = await this.databaseService.callStoredProc('sp_eliminar_tb_modelo', [id]);
            console.log(" ACAAAAA", result);
            return {
                message: `Se ha eliminado correctamente`
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
exports.ModelosService = ModelosService;
exports.ModelosService = ModelosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ModelosService);
//# sourceMappingURL=modelos.service.js.map