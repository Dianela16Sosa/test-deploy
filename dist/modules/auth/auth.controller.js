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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const dto_1 = require("./dto");
const decorators_1 = require("./decorators");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    registrar(createPersonaDto) {
        return this.authService.register(createPersonaDto);
    }
    logIn(loginPersonaDto) {
        return this.authService.logIn(loginPersonaDto);
    }
    checkAuthStatus(user) {
        return this.authService.checkAuthStatus(user);
    }
    checkToken(token) {
        return this.authService.checkToken(token);
    }
    confirm(token) {
        return this.authService.confirm(token);
    }
    requestPasswordChange(reqChangePasswordDto) {
        return this.authService.requestPasswordChange(reqChangePasswordDto);
    }
    changePassword(token, changePasswordDto) {
        return this.authService.changePassword(token, changePasswordDto);
    }
    getPersona(token) {
        return this.authService.getPersona(token);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Usuario registrado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Correo electrónico o contraseña incorrectos' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreatePersonaDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "registrar", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuario encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Acceso no autorizado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.LoginPersonaDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logIn", null);
__decorate([
    (0, common_1.Get)('check-status'),
    (0, decorators_1.Auth)(),
    __param(0, (0, decorators_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "checkAuthStatus", null);
__decorate([
    (0, common_1.Get)('check-token/:token'),
    __param(0, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "checkToken", null);
__decorate([
    (0, common_1.Patch)('confirm/:token'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Correo electrónico confirmado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Token inválido' }),
    __param(0, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "confirm", null);
__decorate([
    (0, common_1.Patch)('change-password'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Se solicitó correctamente el cambio de contraseña' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No existe el usuario' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.RequestChangePasswordDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "requestPasswordChange", null);
__decorate([
    (0, common_1.Patch)('change-password/:token'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Contraseña cambiada' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Token inválido' }),
    __param(0, (0, common_1.Param)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.ChangePasswordDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Get)(':token'),
    __param(0, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getPersona", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map