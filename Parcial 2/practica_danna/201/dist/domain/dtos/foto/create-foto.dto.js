"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFotoDto = void 0;
class createFotoDto {
    constructor(idproducto, archivo, descripcion) {
        this.idproducto = idproducto;
        this.archivo = archivo;
        this.descripcion = descripcion;
    }
    static create(props) {
        const { idproducto, archivo, descripcion } = props;
        if (!idproducto || isNaN(Number(idproducto))) {
            return ['idproducto debe ser un número válido', undefined];
        }
        if (!archivo) {
            return ['archivo es un campo requerido', undefined];
        }
        if (descripcion && descripcion.length > 255) {
            return ['La descripción no puede exceder los 255 caracteres', undefined];
        }
        return [undefined, new createFotoDto(idproducto, archivo, descripcion)];
    }
}
exports.createFotoDto = createFotoDto;
