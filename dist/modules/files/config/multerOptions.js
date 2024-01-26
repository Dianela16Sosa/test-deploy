"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerOptions = void 0;
const fileFilter_helper_1 = require("../helpers/fileFilter.helper");
exports.multerOptions = {
    limits: {
        fileSize: 1024 * 300,
    },
    fileFilter: fileFilter_helper_1.fileFilter,
};
//# sourceMappingURL=multerOptions.js.map