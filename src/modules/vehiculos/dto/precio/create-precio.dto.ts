import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreatePrecioDto{
    @ApiProperty({
        description:'Precio',
        nullable:false,
    })
    @IsNumber()
    readonly precio: number;

    @ApiProperty({
        description:'Persona FK',
        nullable:false,
    })
    @IsNumber()
    readonly personaFK: number
    @ApiProperty({
        description:'Vehiculo FK',
        nullable:false,
    })
    @IsNumber()
    readonly vehiculoFK: number

}