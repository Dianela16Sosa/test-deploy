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
exports.VehiculoPersonaService = void 0;
const common_1 = require("@nestjs/common");
const error_1 = require("../../../common/errors/error");
const database_service_1 = require("../../database/database.service");
const files_service_1 = require("../../files/files.service");
let VehiculoPersonaService = class VehiculoPersonaService {
    constructor(fileService, databaseService) {
        this.fileService = fileService;
        this.databaseService = databaseService;
    }
    async create(createVehiculoPersonaDto) {
        try {
            const { vehiculoFK, personaFK } = createVehiculoPersonaDto;
            const result = await this.databaseService.callStoredProc('sp_insertar_tb_vehiculo_persona', [vehiculoFK, personaFK]);
            console.log(result);
            const id = result[0][0].id;
            return { id, ...createVehiculoPersonaDto };
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async findAllWithImagesPersona(id) {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_tb_vehiculo_persona_by_pk', [id]);
            const vehiculos = result[0];
            console.log(vehiculos);
            const vehiculosWithImages = await Promise.all(vehiculos.map(async (vehiculo) => {
                const { Images } = await this.fileService.downloadVehicleImages('vehiculos', vehiculo.ImagesFolderName);
                return { ...vehiculo, Images };
            }));
            return vehiculosWithImages;
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async changePublicationStatus(changePublicationStatusDto) {
        try {
            const { vehiculoPK, personaPK, estadoPK } = changePublicationStatusDto;
            const result = await this.databaseService.callStoredProc('sp_modificar_tb_vehiculo_persona_estado', [vehiculoPK, personaPK, estadoPK]);
            if (result[0][0].sp_result === 0)
                throw new error_1.NotFoundError('No se pudo cambiar el estado de la publicación del vehículo.');
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
exports.VehiculoPersonaService = VehiculoPersonaService;
exports.VehiculoPersonaService = VehiculoPersonaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [files_service_1.FilesService,
        database_service_1.DatabaseService])
], VehiculoPersonaService);
//# sourceMappingURL=vehiculoPersona.service.js.map