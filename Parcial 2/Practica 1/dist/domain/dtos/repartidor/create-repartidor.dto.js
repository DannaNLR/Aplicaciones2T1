"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRepartidorDto = void 0;
class CreateRepartidorDto {
    constructor(Nombre, Telefono, Correo, Cedula) {
        this.Nombre = Nombre;
        this.Telefono = Telefono;
        this.Correo = Correo;
        this.Cedula = Cedula;
    }
    static create(props) {
        const { Nombre, Telefono, Correo, Cedula } = props;
        if (Nombre.length > 50) {
            return ['El nombre no puede tener más de 50 caracteres.', undefined];
        }
        if (Cedula.length > 10) {
            return ['La cédula no puede tener más de 20 caracteres.', undefined];
        }
        if (Telefono.length > 20) {
            return ['El teléfono no puede tener más de 20 caracteres.', undefined];
        }
        if (Correo.length > 100) {
            return ['El correo no puede tener más de 100 caracteres.', undefined];
        }
        return [undefined, new CreateRepartidorDto(Nombre, Telefono, Correo, Cedula)];
    }
}
exports.CreateRepartidorDto = CreateRepartidorDto;
