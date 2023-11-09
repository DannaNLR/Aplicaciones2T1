"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRolDto = void 0;
class createRolDto {
    constructor(rol, descripcion) {
        this.rol = rol;
        this.descripcion = descripcion;
    }
    static create(props) {
        const { rol, descripcion } = props;
        if (!rol) {
            return ['El campo rol es requerido', undefined];
        }
        if (!descripcion || descripcion.length > 250) {
            if (!descripcion) {
                return ['descripcion es un campo requerido', undefined];
            }
            else {
                return ['descripcion no puede tener más de 250 caracteres', undefined];
            }
        }
        return [undefined, new createRolDto(rol, descripcion)];
    }
}
exports.createRolDto = createRolDto;
