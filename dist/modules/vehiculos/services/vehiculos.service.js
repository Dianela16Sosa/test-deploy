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
exports.VehiculosService = void 0;
const common_1 = require("@nestjs/common");
const error_1 = require("../../../common/errors/error");
const uuid_1 = require("uuid");
const files_service_1 = require("../../files/files.service");
const fs = require("fs");
const database_service_1 = require("../../database/database.service");
let VehiculosService = class VehiculosService {
    constructor(fileService, databaseService) {
        this.fileService = fileService;
        this.databaseService = databaseService;
    }
    async create(createVehiculoDto) {
        try {
            const { anio, kilometraje, numeroPuertas, numeroAsientos, cantidadLlaves, descripcion, patente, chasis, numeroMotor, version, cilindrada, tipoVehiculoFK, tipoCombustibleFK, transmisionFK, modeloFK, colorExteriorFK, colorInteriorFK, condicionVehiculoFK, traccionFK } = createVehiculoDto;
            const imagesFolderName = `vehicle-images-${(0, uuid_1.v4)()}`;
            console.log(imagesFolderName);
            const result = await this.databaseService.callStoredProc('sp_insertar_tb_vehiculo', [anio, kilometraje,
                numeroPuertas, numeroAsientos, cantidadLlaves, descripcion, patente, chasis, numeroMotor, version, cilindrada, tipoVehiculoFK, tipoCombustibleFK,
                transmisionFK, modeloFK, colorExteriorFK, colorInteriorFK, condicionVehiculoFK, traccionFK, imagesFolderName]);
            console.log(result);
            const id = result[0][0].id;
            return { id, ...createVehiculoDto, imagesFolderName };
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async findAll() {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_tb_vehiculos', []);
            return result[0];
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async findAllWithImagesSeller() {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_tb_vehiculos_completo', []);
            const vehiculos = result[0];
            console.log(vehiculos);
            const vehiculosWithImages = await Promise.all(vehiculos.map(async (vehiculo) => {
                const { Images } = await this.fileService.downloadVehicleImages("vehiculos", vehiculo.ImagesFolderName);
                return { ...vehiculo, Images };
            }));
            return vehiculosWithImages;
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async findAllWithImages() {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_tb_vehiculos', []);
            const vehiculos = result[0];
            const vehiculosWithImages = await Promise.all(vehiculos.map(async (vehiculo) => {
                const { Images } = await this.fileService.downloadVehicleImages("vehiculos", vehiculo.ImagesFolderName);
                return { ...vehiculo, Images };
            }));
            return vehiculosWithImages;
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async findTipoCombustible() {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_tb_tipo_combustible', []);
            return result[0][0].TipoCombustible;
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async findTransmision() {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_tb_transmision', []);
            return result[0][0].Transmisiones;
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async findMarcaVehiculo() {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_marca_vehiculo', []);
            return result[0];
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async findCondicionVehiculo() {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_tb_condicion_vehiculo', []);
            return result[0][0].CondicionesVehiculo;
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async findColores() {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_tb_color', []);
            return result[0][0].Colores;
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async findColoresHex() {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_tb_colores_hex', []);
            return result[0][0].Colores;
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async findVehiculoAnios() {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_anio_vehiculo', []);
            return result[0][0].Anios;
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async findTipoVehiculo() {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_tb_tipo_vehiculo', []);
            return result[0][0].TiposVehiculo;
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async findTraccion() {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_tb_traccion', []);
            return result[0][0].Tracciones;
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async getCilindradas() {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_tb_cilindrada', []);
            return result[0][0].Cilindradas;
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async eliminarVehiculo(id) {
        try {
            const result = await this.databaseService.callStoredProc('sp_eliminar_tb_vehiculo_por_PK', [id]);
            console.log(result);
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async findOne(id) {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_tb_vehiculo_por_PK', [id]);
            if (result[0][0] === undefined)
                throw new error_1.NotFoundError("Error: no se ha encontrado un vehículo con ese ID", 124);
            console.log(result);
            const { ImagesFolderName } = result[0][0];
            console.log(ImagesFolderName);
            const { Images } = await this.fileService.downloadVehicleImages("vehiculos", ImagesFolderName);
            return { ...result[0][0], Images };
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    getVehicleByPatente(patente) {
        const vehicle_json = fs.readFileSync('src/data/vehiculo.json', 'utf-8');
        const vehicle = JSON.parse(vehicle_json);
        if (vehicle.patente !== patente)
            throw new common_1.NotFoundException("No se encontró un vehículo con esa patente");
        return vehicle;
    }
    async registrarIntentoContactar(contactarDto) {
        const { vehiculoPK, personaPK } = contactarDto;
        try {
            await this.databaseService.callStoredProc('sp_insertar_tb_contactar', [personaPK, vehiculoPK]);
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    async editarVehiculo(id, updateVehiculoDto) {
        const { anio, kilometraje, numeroPuertas, numeroAsientos, cantidadLlaves, descripcion, patente, chasis, numeroMotor, version, cilindrada, tipoVehiculoFK, tipoCombustibleFK, transmisionFK, modeloFK, colorExteriorFK, colorInteriorFK, condicionVehiculoFK, traccionFK, sku, ImagesFolderName, } = updateVehiculoDto;
        try {
            const result = await this.databaseService.callStoredProc('sp_modificar_tb_vehiculo', [
                id,
                anio,
                kilometraje,
                numeroPuertas,
                numeroAsientos,
                descripcion,
                patente,
                chasis,
                numeroMotor,
                tipoCombustibleFK,
                transmisionFK,
                modeloFK,
                colorExteriorFK,
                colorInteriorFK,
                condicionVehiculoFK,
                ImagesFolderName,
                traccionFK,
                cilindrada,
                sku,
                cantidadLlaves,
                version,
                tipoVehiculoFK,
            ]);
            console.log(result);
            return { message: "Se ha editado correctamente" };
            return result;
        }
        catch (error) {
            console.log("Error en editar", error);
            return { message: "No se ha editado" };
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
exports.VehiculosService = VehiculosService;
exports.VehiculosService = VehiculosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [files_service_1.FilesService,
        database_service_1.DatabaseService])
], VehiculosService);
//# sourceMappingURL=vehiculos.service.js.map