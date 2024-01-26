"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarId = void 0;
function generarId() {
    const random = Math.random().toString(32).substring(2);
    const fecha = Date.now().toString(32);
    return random + fecha;
}
exports.generarId = generarId;
//# sourceMappingURL=generarId.js.map