"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCiudadDto = void 0;
class UpdateCiudadDto {
    constructor(ciudad) {
        this.ciudad = ciudad;
    }
    get values() {
        const returnObj = {};
        if (this.ciudad !== undefined)
            returnObj.ciudad = this.ciudad;
        return returnObj;
    }
    static create(props) {
        const { ciudad, direcciones } = props;
        if ((ciudad === undefined && direcciones === undefined)) {
            return [
                'El ID de la ciudad debe ser un número válido y al menos una propiedad debe proporcionarse',
                undefined
            ];
        }
        return [undefined, new UpdateCiudadDto(ciudad)];
    }
}
exports.UpdateCiudadDto = UpdateCiudadDto;
