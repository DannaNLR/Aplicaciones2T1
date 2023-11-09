"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDireccionDto = void 0;
class UpdateDireccionDto {
    constructor(CI, id_ciudad, id_referencia) {
        this.CI = CI;
        this.id_ciudad = id_ciudad;
        this.id_referencia = id_referencia;
    }
    get values() {
        const returnObj = {};
        if (this.id_ciudad !== undefined)
            returnObj.id_ciudad = this.id_ciudad;
        if (this.id_referencia !== undefined)
            returnObj.id_referencia = this.id_referencia;
        return returnObj;
    }
    static create(props) {
        const { CI, id_ciudad, id_referencia } = props;
        if (isNaN(CI) || (id_ciudad === undefined && id_referencia === undefined)) {
            return ['El CI debe ser un número válido y al menos una propiedad debe proporcionarse', undefined];
        }
        return [undefined, new UpdateDireccionDto(CI, id_ciudad, id_referencia)];
    }
}
exports.UpdateDireccionDto = UpdateDireccionDto;
