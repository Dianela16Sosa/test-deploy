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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let UsuariosService = class UsuariosService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async findAll() {
        try {
            console.log('aaaa');
            const result = await this.databaseService.callStoredProc('sp_listar_tb_persona', []);
            return result[0][0].UsuariosDetallados;
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
    handleDBExceptions(error) {
        throw new Error('Method not implemented.');
    }
    async eliminarUsuario(id) {
        try {
            const result = await this.databaseService.callStoredProc('sp_eliminar_tb_persona', [id]);
            console.log(result);
        }
        catch (error) {
            console.log(error);
            this.handleDBExceptions(error);
        }
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map