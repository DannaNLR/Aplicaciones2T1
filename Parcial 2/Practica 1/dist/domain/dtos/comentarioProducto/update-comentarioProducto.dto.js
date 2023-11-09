"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateComentarioProductoDto = void 0;
class updateComentarioProductoDto {
    constructor(idcomentario, idproducto, CI, comentario) {
        this.idcomentario = idcomentario;
        this.idproducto = idproducto;
        this.CI = CI;
        this.comentario = comentario;
    }
    get values() {
        const returnObj = {};
        if (this.idproducto)
            returnObj.idproducto = this.idproducto;
        if (this.CI)
            returnObj.CI = this.CI;
        if (this.comentario)
            returnObj.comentario = this.comentario;
        return returnObj;
    }
    static create(props) {
        const { idcomentario, idproducto, CI, comentario } = props;
        if (!idcomentario || isNaN(Number(idcomentario))) {
            return ['idcomentario debe ser un número válido', undefined];
        }
        if (!idproducto && !CI && !comentario) {
            return ['Al menos una propiedad debe ser proporcionada', undefined];
        }
        return [undefined, new updateComentarioProductoDto(idcomentario, idproducto, CI, comentario)];
    }
}
exports.updateComentarioProductoDto = updateComentarioProductoDto;
