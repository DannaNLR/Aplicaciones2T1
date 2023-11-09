"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComentarioProductoDto = void 0;
class createComentarioProductoDto {
    constructor(idproducto, CI, comentario) {
        this.idproducto = idproducto;
        this.CI = CI;
        this.comentario = comentario;
    }
    static create(props) {
        const { idproducto, CI, comentario } = props;
        if (!idproducto || isNaN(Number(idproducto))) {
            return ['El campo idproducto debe ser un número válido', undefined];
        }
        if (!CI || isNaN(Number(CI))) {
            return ['El campo CI debe ser un número válido', undefined];
        }
        if (!comentario) {
            return ['El campo comentario es requerido', undefined];
        }
        return [undefined, new createComentarioProductoDto(idproducto, CI, comentario)];
    }
}
exports.createComentarioProductoDto = createComentarioProductoDto;
