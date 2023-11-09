"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClienteDto = void 0;
class updateClienteDto {
    constructor(CI, idrol, nombre, apellido, telefono, correo, contrasena) {
        this.CI = CI;
        this.idrol = idrol;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.contrasena = contrasena;
    }
    get values() {
        const returnObj = {};
        if (this.idrol)
            returnObj.idrol = this.idrol;
        if (this.nombre)
            returnObj.nombre = this.nombre;
        if (this.apellido)
            returnObj.apellido = this.apellido;
        if (this.telefono)
            returnObj.telefono = this.telefono;
        if (this.correo)
            returnObj.correo = this.correo;
        if (this.contrasena)
            returnObj.contrasena = this.contrasena;
        return returnObj;
    }
    static create(props) {
        const { CI, idrol, nombre, apellido, telefono, correo, contrasena } = props;
        if (!CI || isNaN(Number(CI))) {
            return ['CI debe ser un número válido', undefined];
        }
        if (!idrol && !nombre && !apellido && !telefono && !correo && !contrasena) {
            return ['Al menos una propiedad debe ser proporcionada', undefined];
        }
        return [undefined, new updateClienteDto(CI, idrol, nombre, apellido, telefono, correo, contrasena)];
    }
}
exports.updateClienteDto = updateClienteDto;
