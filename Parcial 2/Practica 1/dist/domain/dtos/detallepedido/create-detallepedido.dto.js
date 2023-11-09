"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDetallePedidoDto = void 0;
class CreateDetallePedidoDto {
    constructor(idpedido, idproducto, Cantidad, Precio, Subtotal, Costo_envio) {
        this.idpedido = idpedido;
        this.idproducto = idproducto;
        this.Cantidad = Cantidad;
        this.Precio = Precio;
        this.Subtotal = Subtotal;
        this.Costo_envio = Costo_envio;
    }
    static create(props) {
        const { idpedido, idproducto, Cantidad, Precio, Subtotal, Costo_envio, } = props;
        if (!idpedido || isNaN(Number(idpedido))) {
            return ['idpedido debe ser un número válido', undefined];
        }
        if (!idproducto || isNaN(Number(idproducto))) {
            return ['idproducto debe ser un número válido', undefined];
        }
        if (!Cantidad || isNaN(Number(Cantidad)) || Cantidad <= 0) {
            return ['Cantidad debe ser un número válido y mayor que 0', undefined];
        }
        if (!Precio || isNaN(Number(Precio)) || Precio <= 0) {
            return ['Precio debe ser un número válido y mayor que 0', undefined];
        }
        if (!Subtotal || isNaN(Number(Subtotal)) || Subtotal <= 0) {
            return ['Subtotal debe ser un número válido y mayor que 0', undefined];
        }
        if (!Costo_envio || isNaN(Number(Costo_envio)) || Costo_envio < 0) {
            return ['Costo_envio debe ser un número válido y no negativo', undefined];
        }
        return [
            undefined,
            new CreateDetallePedidoDto(idpedido, idproducto, Cantidad, Precio, Subtotal, Costo_envio)
        ];
    }
}
exports.CreateDetallePedidoDto = CreateDetallePedidoDto;
