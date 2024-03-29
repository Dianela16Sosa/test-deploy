"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const TypeOrmConfigService_1 = require("./config/TypeOrmConfigService");
const vehiculos_module_1 = require("./modules/vehiculos/vehiculos.module");
const auth_module_1 = require("./modules/auth/auth.module");
const personas_module_1 = require("./modules/personas/personas.module");
const files_module_1 = require("./modules/files/files.module");
const pdf_module_1 = require("./modules/pdf/pdf.module");
const database_module_1 = require("./modules/database/database.module");
const automotora_module_1 = require("./modules/automotora/automotora.module");
const usuarios_module_1 = require("./modules/usuarios/usuarios.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useClass: TypeOrmConfigService_1.TypeOrmConfigService,
            }),
            auth_module_1.AuthModule,
            database_module_1.DatabaseModule,
            files_module_1.FilesModule,
            pdf_module_1.PdfModule,
            personas_module_1.PersonasModule,
            vehiculos_module_1.VehiculosModule,
            automotora_module_1.AutomotoraModule,
            usuarios_module_1.UsuariosModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map