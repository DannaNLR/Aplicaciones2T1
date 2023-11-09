"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCaracteristicaDto = void 0;
class UpdateCaracteristicaDto {
    constructor(idCaracteristica, nombreCaracteristica, descripcionCaracteristica) {
        this.idCaracteristica = idCaracteristica;
        this.nombreCaracteristica = nombreCaracteristica;
        this.descripcionCaracteristica = descripcionCaracteristica;
    }
    get values() {
        const returnObj = {};
        if (this.nombreCaracteristica !== undefined)
            returnObj.nombreCaracteristica = this.nombreCaracteristica;
        if (this.descripcionCaracteristica !== undefined)
            returnObj.descripcionCaracteristica = this.descripcionCaracteristica;
        return returnObj;
    }
    static create(props) {
        const { idCaracteristica, nombreCaracteristica, descripcionCaracteristica } = props;
        if (!idCaracteristica || isNaN(Number(idCaracteristica))) {
            return ['idCaracteristica debe ser un número válido', undefined];
        }
        if (!nombreCaracteristica && !descripcionCaracteristica) {
            return ['Al menos una propiedad debe ser proporcionada', undefined];
        }
        return [undefined, new UpdateCaracteristicaDto(idCaracteristica, nombreCaracteristica, descripcionCaracteristica)];
    }
}
exports.UpdateCaracteristicaDto = UpdateCaracteristicaDto;
