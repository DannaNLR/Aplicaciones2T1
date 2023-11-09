"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePedidoDto = void 0;
class UpdatePedidoDto {
    constructor(idpedido, id_repartidor, Fecha, Total, entregado, direccion_envio) {
        this.idpedido = idpedido;
        this.id_repartidor = id_repartidor;
        this.Fecha = Fecha;
        this.Total = Total;
        this.entregado = entregado;
        this.direccion_envio = direccion_envio;
    }
    get values() {
        const returnObj = {};
        if (this.id_repartidor)
            returnObj.id_repartidor = this.id_repartidor;
        if (this.Fecha)
            returnObj.Fecha = this.Fecha;
        if (this.Total)
            returnObj.Total = this.Total;
        if (this.entregado !== undefined)
            returnObj.entregado = this.entregado;
        if (this.direccion_envio)
            returnObj.direccion_envio = this.direccion_envio;
        return returnObj;
    }
    static create(props) {
        const { idpedido, id_repartidor, Fecha, Total, entregado, direccion_envio } = props;
        if (!idpedido || isNaN(Number(idpedido))) {
            return ['idpedido debe ser un número válido', undefined];
        }
        if (!id_repartidor && !Fecha && !Total && entregado === undefined && !direccion_envio) {
            return ['Al menos una propiedad debe ser proporcionada', undefined];
        }
        return [undefined, new UpdatePedidoDto(idpedido, id_repartidor, Fecha, Total, entregado, direccion_envio)];
    }
}
exports.UpdatePedidoDto = UpdatePedidoDto;
