import { CreateModeloDto } from "./create-modelo.dto";
declare const UpdateModeloDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateModeloDto>>;
export declare class UpdateModeloDto extends UpdateModeloDto_base {
    modelo: string;
}
export {};
