/// <reference types="express-serve-static-core" />
/// <reference types="passport" />
/// <reference types="multer" />
export declare const imageFileNamer: (folderPath: string, file: Express.Multer.File) => string;
export declare const imageUserFileNamer: (folderPath: string, file: Express.Multer.File) => string;
