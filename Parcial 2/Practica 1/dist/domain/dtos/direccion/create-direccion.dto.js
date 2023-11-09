"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDireccionDto = void 0;
class CreateDireccionDto {
    constructor(CI, id_ciudad, id_referencia) {
        this.CI = CI;
        this.id_ciudad = id_ciudad;
        this.id_referencia = id_referencia;
    }
    static create(props) {
        const { CI, id_ciudad, id_referencia } = props;
        if (CI === undefined || id_ciudad === undefined || id_referencia === undefined) {
            return ['Entrada no válida. Todos los campos son obligatorios.', undefined];
        }
        if (typeof CI !== 'number' || typeof id_ciudad !== 'number' || typeof id_referencia !== 'number') {
            return ['Entrada no válida. Todos los campos deben ser del tipo de datos correcto.', undefined];
        }
        return [undefined, new CreateDireccionDto(CI, id_ciudad, id_referencia)];
    }
}
exports.CreateDireccionDto = CreateDireccionDto;
