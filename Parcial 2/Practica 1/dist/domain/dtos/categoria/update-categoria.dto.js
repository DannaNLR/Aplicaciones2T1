"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoriaDto = void 0;
class UpdateCategoriaDto {
    constructor(idCategoria, descuento, precio, nombreCategoria, idSubCategoria, idCaracteristica) {
        this.idCategoria = idCategoria;
        this.descuento = descuento;
        this.precio = precio;
        this.nombreCategoria = nombreCategoria;
        this.idSubCategoria = idSubCategoria;
        this.idCaracteristica = idCaracteristica;
    }
    get values() {
        const returnObj = {};
        if (this.descuento !== undefined)
            returnObj.descuento = this.descuento;
        if (this.precio !== undefined)
            returnObj.precio = this.precio;
        if (this.nombreCategoria !== undefined)
            returnObj.nombreCategoria = this.nombreCategoria;
        if (this.idSubCategoria !== undefined)
            returnObj.idSubCategoria = this.idSubCategoria;
        if (this.idCaracteristica !== undefined)
            returnObj.idCaracteristica = this.idCaracteristica;
        return returnObj;
    }
    static create(props) {
        const { idCategoria, descuento, precio, nombreCategoria, idSubCategoria, idCaracteristica } = props;
        if (!idCategoria || isNaN(Number(idCategoria))) {
            return ['idCategoria debe ser un número válido', undefined];
        }
        if (!descuento && !precio && !nombreCategoria && idSubCategoria === undefined && idCaracteristica === undefined) {
            return ['Al menos una propiedad debe ser proporcionada', undefined];
        }
        return [undefined, new UpdateCategoriaDto(idCategoria, descuento, precio, nombreCategoria, idSubCategoria || null, idCaracteristica || null)];
    }
}
exports.UpdateCategoriaDto = UpdateCategoriaDto;
