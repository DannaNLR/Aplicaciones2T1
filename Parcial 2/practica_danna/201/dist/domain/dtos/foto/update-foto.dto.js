"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFotoDto = void 0;
class updateFotoDto {
    constructor(idfoto, idproducto, archivo, descripcion) {
        this.idfoto = idfoto;
        this.idproducto = idproducto;
        this.archivo = archivo;
        this.descripcion = descripcion;
    }
    get values() {
        const returnObj = {};
        if (this.idproducto)
            returnObj.idproducto = this.idproducto;
        if (this.archivo)
            returnObj.archivo = this.archivo;
        if (this.descripcion)
            returnObj.descripcion = this.descripcion;
        return returnObj;
    }
    static create(props) {
        const { idfoto, idproducto, archivo, descripcion } = props;
        if (!idfoto || isNaN(Number(idfoto))) {
            return ['id debe ser un número válido', undefined];
        }
        if (!archivo && !descripcion && !idproducto) {
            return ['Al menos una propiedad debe ser proporcionada', undefined];
        }
        return [undefined, new updateFotoDto(idfoto, idproducto, archivo, descripcion)];
    }
}
exports.updateFotoDto = updateFotoDto;
