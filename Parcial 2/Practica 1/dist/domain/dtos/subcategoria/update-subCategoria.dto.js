"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSubCategoriaDto = void 0;
class UpdateSubCategoriaDto {
    constructor(idSubCategoria, color, talla, descripcion) {
        this.idSubCategoria = idSubCategoria;
        this.color = color;
        this.talla = talla;
        this.descripcion = descripcion;
    }
    get values() {
        const returnObj = {};
        if (this.color !== undefined)
            returnObj.color = this.color;
        if (this.talla !== undefined)
            returnObj.talla = this.talla;
        if (this.descripcion !== undefined)
            returnObj.descripcion = this.descripcion;
        return returnObj;
    }
    static create(props) {
        const { idSubCategoria, color, talla, descripcion } = props;
        if (!idSubCategoria || isNaN(Number(idSubCategoria))) {
            return ['idSubCategoria debe ser un número válido', undefined];
        }
        if (!color && !talla && !descripcion) {
            return ['Al menos una propiedad debe ser proporcionada', undefined];
        }
        return [undefined, new UpdateSubCategoriaDto(idSubCategoria, color, talla, descripcion)];
    }
}
exports.UpdateSubCategoriaDto = UpdateSubCategoriaDto;
