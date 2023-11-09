"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCaracteristicaDto = void 0;
class CreateCaracteristicaDto {
    constructor(nombreCaracteristica, descripcionCaracteristica) {
        this.nombreCaracteristica = nombreCaracteristica;
        this.descripcionCaracteristica = descripcionCaracteristica;
    }
    static create(props) {
        const { nombreCaracteristica, descripcionCaracteristica } = props;
        if (!nombreCaracteristica || !descripcionCaracteristica) {
            return ['Los campos nombreCaracteristica y descripcionCaracteristica son obligatorios', undefined];
        }
        return [undefined, new CreateCaracteristicaDto(nombreCaracteristica, descripcionCaracteristica)];
    }
}
exports.CreateCaracteristicaDto = CreateCaracteristicaDto;
