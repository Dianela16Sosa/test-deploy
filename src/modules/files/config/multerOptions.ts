import { fileFilter } from "../helpers/fileFilter.helper";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";

export const multerOptions: MulterOptions = {
  limits: {
    // fileSize: 1024 * 1024 * 10, // Tamaño máximo del archivo (en bytes): 10MB (por ahora)
    fileSize: 1024 * 300, // Tamaño máximo del archivo (en bytes): 300kB (por ahora)
  },
  fileFilter: fileFilter,
};