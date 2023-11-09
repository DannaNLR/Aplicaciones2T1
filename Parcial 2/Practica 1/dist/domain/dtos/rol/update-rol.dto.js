"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRolDto = void 0;
class updateRolDto {
    constructor(idrol, rol, descripcion) {
        this.idrol = idrol;
        this.rol = rol;
        this.descripcion = descripcion;
    }
    get values() {
        const returnObj = {};
        if (this.rol)
            returnObj.rol = this.rol;
        if (this.descripcion)
            returnObj.descripcion = this.descripcion;
        return returnObj;
    }
    static create(props) {
        const { idrol, rol, descripcion } = props;
        if (!idrol || isNaN(Number(idrol))) {
            return ['idrol debe ser un número válido', undefined];
        }
        if (!rol && !descripcion) {
            return ['Al menos una propiedad debe ser proporcionada', undefined];
        }
        return [undefined, new updateRolDto(idrol, rol, descripcion)];
    }
}
exports.updateRolDto = updateRolDto;
