"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFilter = void 0;
const fileFilter = (req, file, callback) => {
    if (!file)
        return callback(new Error('File is empty'), false);
    const fileExtension = file.mimetype.split('/')[1];
    const validExtension = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    if (validExtension.includes(fileExtension)) {
        return callback(null, true);
    }
    return callback(new Error('Make sure that the file is an image'), false);
};
exports.fileFilter = fileFilter;
//# sourceMappingURL=fileFilter.helper.js.map