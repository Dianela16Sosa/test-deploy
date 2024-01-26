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
exports.PersonasService = void 0;
const common_1 = require("@nestjs/common");
const error_1 = require("../../../common/errors/error");
const database_service_1 = require("../../database/database.service");
const files_service_1 = require("../../files/files.service");
let PersonasService = class PersonasService {
    constructor(databaseService, fileService) {
        this.databaseService = databaseService;
        this.fileService = fileService;
    }
    async findOne(id) {
        try {
            const result = await this.databaseService.callStoredProc('sp_listar_nombre_telefono_persona_by_pk', [id]);
            const persona = result[0][0];
            if (!persona)
                throw new error_1.NotFoundError('No se encontró un usuario con ese identificador.');
            return {
                ...persona
            };
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    handleDBExceptions(error) {
        if (error instanceof error_1.NotFoundError)
            throw new common_1.NotFoundException(error.message);
        if (error.errno === 1062)
            throw new common_1.BadRequestException(error.sqlMessage);
        throw new common_1.InternalServerErrorException('Unexpected error, check server logs');
    }
};
exports.PersonasService = PersonasService;
exports.PersonasService = PersonasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService,
        files_service_1.FilesService])
], PersonasService);
//# sourceMappingURL=personas.service.js.map