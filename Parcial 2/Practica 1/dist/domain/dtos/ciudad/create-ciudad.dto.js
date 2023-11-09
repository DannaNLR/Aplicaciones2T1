"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCiudadDto = void 0;
class CreateCiudadDto {
    constructor(ciudad) {
        this.ciudad = ciudad;
    }
    static create(props) {
        const { ciudad } = props;
        if (!ciudad ||
            typeof ciudad !== 'string') {
            return [
                'Entrada no válida. la ciudad y la lista de direcciones son obligatorias, y las direcciones deben ser cadenas de texto.',
                undefined
            ];
        }
        return [undefined, new CreateCiudadDto(ciudad)];
    }
}
exports.CreateCiudadDto = CreateCiudadDto;
