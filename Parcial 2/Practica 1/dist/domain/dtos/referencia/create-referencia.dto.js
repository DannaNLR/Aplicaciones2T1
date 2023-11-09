"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReferenciaDto = void 0;
class CreateReferenciaDto {
    constructor(calle_principal, numero_casa, descripcion) {
        this.calle_principal = calle_principal;
        this.numero_casa = numero_casa;
        this.descripcion = descripcion;
    }
    static create(props) {
        const { calle_principal, numero_casa, descripcion } = props;
        if (!calle_principal ||
            !numero_casa ||
            !descripcion ||
            typeof calle_principal !== 'string' ||
            typeof numero_casa !== 'string' ||
            typeof descripcion !== 'string') {
            return [
                'Entrada no válida. Todos los campos son obligatorios y deben ser cadenas de texto.',
                undefined
            ];
        }
        return [undefined, new CreateReferenciaDto(calle_principal, numero_casa, descripcion)];
    }
}
exports.CreateReferenciaDto = CreateReferenciaDto;
