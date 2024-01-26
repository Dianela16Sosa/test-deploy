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
exports.AutomotoraService = void 0;
const database_service_1 = require("../database/database.service");
const common_1 = require("@nestjs/common");
const error_1 = require("../../common/errors/error");
const uuid_1 = require("uuid");
let AutomotoraService = class AutomotoraService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async create(createAutomotoraDto) {
        try {
            const { automotora, telefono, direccion, email, password, ciudadFK, adminName, adminLastName, extension } = createAutomotoraDto;
            const imageContainer = 'perfil-automotora';
            const imageName = `${imageContainer}-${(0, uuid_1.v4)()}` + extension;
            const result = await this.databaseService.callStoredProc('sp_insertar_tb_concesionario', [
                automotora, telefono, direccion, email, password, imageName, ciudadFK, adminName, adminLastName
            ]);
            const id = result[0][0].id;
            if (id === '0')
                throw new error_1.DuplicateEntry("Esta automotora ya existe", 123);
            delete createAutomotoraDto.password;
            return { ...createAutomotoraDto, imageName, imageContainer };
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async findAll() {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_concesionarios', []);
            return result[0][0].ConcesionariosDetallados;
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    findOne(id) {
        return `This action returns a #${id} automotora`;
    }
    async getVehiculoByAutomotora(AutomotoraPK) {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_vehiculos_concesionarias', [AutomotoraPK]);
            return result[0][0].VehiculosPorConcesionaria;
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async getVendedoresByAutomotora(AutomotoraPK) {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_vendedores_concesionarias', [AutomotoraPK]);
            return result[0][0].VendedoresPorConcesionaria;
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async update(id, updateAutomotoraDto) {
        const { automotora, telefono, direccion, ciudadFK } = updateAutomotoraDto;
        const imageContainer = 'perfil-automotora';
        try {
            const result = await this.databaseService.callStoredProc('sp_modificar_tb_concesionario', [
                id, automotora, direccion, telefono, ciudadFK
            ]);
            return { id, ...updateAutomotoraDto, imageContainer };
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    remove(id) {
        return `This action removes a #${id} automotora`;
    }
    async eliminarAutomotora(id) {
        try {
            const result = await this.databaseService.callStoredProc('sp_eliminar_tb_concesionario', [id]);
            console.log(result);
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
exports.AutomotoraService = AutomotoraService;
exports.AutomotoraService = AutomotoraService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AutomotoraService);
//# sourceMappingURL=automotora.service.js.map