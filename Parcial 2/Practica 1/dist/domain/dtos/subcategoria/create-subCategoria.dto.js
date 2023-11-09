"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubCategoriaDto = void 0;
class CreateSubCategoriaDto {
    constructor(color, talla, descripcion) {
        this.color = color;
        this.talla = talla;
        this.descripcion = descripcion;
    }
    static create(props) {
        const { color, talla, descripcion } = props;
        if (!color || !talla || !descripcion) {
            return ['Los campos color, talla y descripcion son obligatorios', undefined];
        }
        return [undefined, new CreateSubCategoriaDto(color, talla, descripcion)];
    }
}
exports.CreateSubCategoriaDto = CreateSubCategoriaDto;
