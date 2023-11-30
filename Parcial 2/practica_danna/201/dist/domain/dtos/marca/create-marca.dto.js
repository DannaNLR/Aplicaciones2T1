"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMarcaDto = void 0;
class createMarcaDto {
    constructor(nombre, idproducto) {
        this.nombre = nombre;
        this.idproducto = idproducto;
    }
    static create(props) {
        const { nombre, idproducto } = props;
        if (!nombre) {
            return ['nombre es un campo requerido', undefined];
        }
        if (nombre.length > 50) {
            return ['nombre no puede tener más de 50 caracteres', undefined];
        }
        if (!idproducto || isNaN(Number(idproducto))) {
            return ['idproducto debe ser un número válido', undefined];
        }
        return [undefined, new createMarcaDto(nombre, idproducto)];
    }
}
exports.createMarcaDto = createMarcaDto;
