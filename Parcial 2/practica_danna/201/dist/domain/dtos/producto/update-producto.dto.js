"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductoDto = void 0;
class updateProductoDto {
    constructor(idproducto, idCategoria, nombre, descripcion, precio) {
        this.idproducto = idproducto;
        this.idCategoria = idCategoria;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    get values() {
        const returnObj = {};
        if (this.idCategoria)
            returnObj.idCategoria = this.idCategoria;
        if (this.nombre)
            returnObj.nombre = this.nombre;
        if (this.descripcion)
            returnObj.descripcion = this.descripcion;
        if (this.precio)
            returnObj.precio = this.precio;
        return returnObj;
    }
    static create(props) {
        const { idproducto, idCategoria, nombre, descripcion, precio } = props;
        if (!idproducto || isNaN(Number(idproducto))) {
            return ['id debe ser un número válido', undefined];
        }
        if (!nombre && !descripcion && !precio && !idCategoria) {
            return ['Al menos una propiedad debe ser proporcionada', undefined];
        }
        return [undefined, new updateProductoDto(idproducto, idCategoria, nombre, descripcion, precio)];
    }
}
exports.updateProductoDto = updateProductoDto;
