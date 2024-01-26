"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculosModule = void 0;
const common_1 = require("@nestjs/common");
const marcas_controller_1 = require("./controllers/marcas.controller");
const marcas_service_1 = require("./services/marcas.service");
const modelos_controller_1 = require("./controllers/modelos.controller");
const modelos_service_1 = require("./services/modelos.service");
const vehiculos_controller_1 = require("./controllers/vehiculos.controller");
const vehiculos_service_1 = require("./services/vehiculos.service");
const vehiculoPersona_controller_1 = require("./controllers/vehiculoPersona.controller");
const vehiculoPersona_service_1 = require("./services/vehiculoPersona.service");
const files_module_1 = require("../files/files.module");
const auth_module_1 = require("../auth/auth.module");
const precio_controller_1 = require("./controllers/precio.controller");
const precio_service_1 = require("./services/precio.service");
let VehiculosModule = class VehiculosModule {
};
exports.VehiculosModule = VehiculosModule;
exports.VehiculosModule = VehiculosModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            marcas_controller_1.MarcasController,
            modelos_controller_1.ModelosController,
            vehiculos_controller_1.VehiculosController,
            vehiculoPersona_controller_1.VehiculoPersonaController,
            precio_controller_1.PrecioController
        ],
        providers: [
            marcas_service_1.MarcasService,
            modelos_service_1.ModelosService,
            vehiculos_service_1.VehiculosService,
            vehiculoPersona_service_1.VehiculoPersonaService,
            precio_service_1.PrecioService
        ],
        imports: [
            files_module_1.FilesModule,
            auth_module_1.AuthModule
        ],
    })
], VehiculosModule);
//# sourceMappingURL=vehiculos.module.js.map