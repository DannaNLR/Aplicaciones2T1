"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoriaDto = void 0;
class CreateCategoriaDto {
    constructor(descuento, precio, nombreCategoria, idSubCategoria, idCaracteristica) {
        this.descuento = descuento;
        this.precio = precio;
        this.nombreCategoria = nombreCategoria;
        this.idSubCategoria = idSubCategoria;
        this.idCaracteristica = idCaracteristica;
    }
    static create(props) {
        const { descuento, precio, nombreCategoria, idSubCategoria, idCaracteristica } = props;
        if (descuento === undefined || precio === undefined || nombreCategoria === undefined) {
            return ['Entrada no válida. Los campos descuento, precio y nombreCategoria son obligatorios.', undefined];
        }
        if (typeof descuento !== 'number' || typeof precio !== 'number' || typeof nombreCategoria !== 'string') {
            return ['Entrada no válida. Los campos descuento y precio deben ser números, y nombreCategoria debe ser una cadena.', undefined];
        }
        return [undefined, new CreateCategoriaDto(descuento, precio, nombreCategoria, idSubCategoria || null, idCaracteristica || null)];
    }
}
exports.CreateCategoriaDto = CreateCategoriaDto;
