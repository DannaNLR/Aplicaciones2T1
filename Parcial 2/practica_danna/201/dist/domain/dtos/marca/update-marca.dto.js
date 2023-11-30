"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMarcaDto = void 0;
class updateMarcaDto {
    constructor(idmarca, nombre, idproducto) {
        this.idmarca = idmarca;
        this.nombre = nombre;
        this.idproducto = idproducto;
    }
    get values() {
        const returnObj = {};
        if (this.nombre)
            returnObj.nombre = this.nombre;
        if (this.idproducto)
            returnObj.idproducto = this.idproducto;
        return returnObj;
    }
    static create(props) {
        const { idmarca, nombre, idproducto } = props;
        if (!idmarca || isNaN(Number(idmarca))) {
            return ['id debe ser un número válido', undefined];
        }
        if (!nombre && !idproducto) {
            return ['Al menos una propiedad debe ser proporcionada', undefined];
        }
        return [undefined, new updateMarcaDto(idmarca, nombre, idproducto)];
    }
}
exports.updateMarcaDto = updateMarcaDto;
