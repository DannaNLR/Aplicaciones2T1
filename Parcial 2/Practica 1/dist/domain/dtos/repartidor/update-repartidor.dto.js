"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRepartidorDto = void 0;
class UpdateRepartidorDto {
    constructor(id_repartidor, Nombre, Telefono, Correo, Cedula) {
        this.id_repartidor = id_repartidor;
        this.Nombre = Nombre;
        this.Telefono = Telefono;
        this.Correo = Correo;
        this.Cedula = Cedula;
    }
    get values() {
        const returnObj = {};
        if (this.Nombre)
            returnObj.Nombre = this.Nombre;
        if (this.Telefono)
            returnObj.Telefono = this.Telefono;
        if (this.Correo)
            returnObj.Correo = this.Correo;
        if (this.Cedula)
            returnObj.Cedula = this.Cedula;
        return returnObj;
    }
    static create(props) {
        const { id_repartidor, Nombre, Telefono, Correo, Cedula } = props;
        if (!id_repartidor || isNaN(Number(id_repartidor))) {
            return ['id_repartidor debe ser un número válido', undefined];
        }
        if (!Nombre && !Telefono && !Correo && !Cedula) {
            return ['Al menos una propiedad debe ser proporcionada', undefined];
        }
        return [undefined, new UpdateRepartidorDto(id_repartidor, Nombre, Telefono, Correo, Cedula)];
    }
}
exports.UpdateRepartidorDto = UpdateRepartidorDto;
