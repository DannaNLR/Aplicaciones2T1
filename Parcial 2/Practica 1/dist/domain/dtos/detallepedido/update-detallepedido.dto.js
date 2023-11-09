"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDetallePedidoDto = void 0;
class UpdateDetallePedidoDto {
    constructor(iddetalle, idproducto, cantidad, precio, subtotal, costo_envio) {
        this.iddetalle = iddetalle;
        this.idproducto = idproducto;
        this.cantidad = cantidad;
        this.precio = precio;
        this.subtotal = subtotal;
        this.costo_envio = costo_envio;
    }
    get values() {
        const returnObj = {};
        if (this.idproducto)
            returnObj.idproducto = this.idproducto;
        if (this.cantidad)
            returnObj.cantidad = this.cantidad;
        if (this.precio)
            returnObj.precio = this.precio;
        if (this.subtotal)
            returnObj.subtotal = this.subtotal;
        if (this.costo_envio)
            returnObj.costo_envio = this.costo_envio;
        return returnObj;
    }
    static create(props) {
        const { iddetalle, idproducto, cantidad, precio, subtotal, costo_envio } = props;
        if (!iddetalle || isNaN(Number(iddetalle))) {
            return ['iddetalle debe ser un número válido', undefined];
        }
        if (!idproducto && !cantidad && !precio && !subtotal && !costo_envio) {
            return ['Al menos una propiedad debe ser proporcionada', undefined];
        }
        return [undefined, new UpdateDetallePedidoDto(iddetalle, idproducto, cantidad, precio, subtotal, costo_envio)];
    }
}
exports.UpdateDetallePedidoDto = UpdateDetallePedidoDto;
