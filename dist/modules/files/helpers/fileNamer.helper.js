"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageUserFileNamer = exports.imageFileNamer = void 0;
const uuid_1 = require("uuid");
const imageFileNamer = (folderPath, file) => {
    let fileExtension = file.mimetype.split('/')[1];
    file.originalname = `vehicle-image-${(0, uuid_1.v4)()}.${fileExtension}`;
    return folderPath + "/" + file.originalname;
};
exports.imageFileNamer = imageFileNamer;
const imageUserFileNamer = (folderPath, file) => {
    let fileExtension = file.mimetype.split('/')[1];
    console.log(fileExtension);
    file.originalname = `foto-perfil-${(0, uuid_1.v4)()}.${fileExtension}`;
    return folderPath + "/" + file.originalname;
};
exports.imageUserFileNamer = imageUserFileNamer;
//# sourceMappingURL=fileNamer.helper.js.map