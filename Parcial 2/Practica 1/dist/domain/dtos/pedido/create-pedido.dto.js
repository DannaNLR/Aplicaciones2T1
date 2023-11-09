"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePedidoDto = void 0;
class CreatePedidoDto {
    constructor(CI, id_repartidor, Fecha, Total, entregado, direccion_envio) {
        this.CI = CI;
        this.id_repartidor = id_repartidor;
        this.Fecha = Fecha;
        this.Total = Total;
        this.entregado = entregado;
        this.direccion_envio = direccion_envio;
    }
    static create(props) {
        const { CI, id_repartidor, Fecha, Total, entregado, direccion_envio } = props;
        if (!CI || !id_repartidor || !Fecha || isNaN(id_repartidor) || isNaN(Total)) {
            return ['CI, id_repartidor, Fecha, y Total son campos requeridos y deben ser valores válidos', undefined];
        }
        if (direccion_envio.length > 255) {
            return ['La dirección de envío no puede tener más de 255 caracteres.', undefined];
        }
        return [undefined, new CreatePedidoDto(CI, id_repartidor, Fecha, Total, entregado, direccion_envio)];
    }
}
exports.CreatePedidoDto = CreatePedidoDto;
