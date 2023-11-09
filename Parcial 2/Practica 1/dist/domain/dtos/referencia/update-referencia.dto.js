"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReferenciaDto = void 0;
class UpdateReferenciaDto {
    constructor(id_referencia, calle_principal, numero_casa, descripcion) {
        this.id_referencia = id_referencia;
        this.calle_principal = calle_principal;
        this.numero_casa = numero_casa;
        this.descripcion = descripcion;
    }
    get values() {
        const returnObj = {};
        if (this.calle_principal !== undefined)
            returnObj.calle_principal = this.calle_principal;
        if (this.numero_casa !== undefined)
            returnObj.numero_casa = this.numero_casa;
        if (this.descripcion !== undefined)
            returnObj.descripcion = this.descripcion;
        return returnObj;
    }
    static create(props) {
        const { id_referencia, calle_principal, numero_casa, descripcion } = props;
        if (isNaN(id_referencia) || (calle_principal === undefined && numero_casa === undefined && descripcion === undefined)) {
            return [
                'El ID de referencia debe ser un número válido y al menos una propiedad debe proporcionarse',
                undefined
            ];
        }
        return [undefined, new UpdateReferenciaDto(id_referencia, calle_principal, numero_casa, descripcion)];
    }
}
exports.UpdateReferenciaDto = UpdateReferenciaDto;
