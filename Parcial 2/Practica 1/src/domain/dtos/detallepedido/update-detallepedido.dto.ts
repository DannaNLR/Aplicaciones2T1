export class UpdateDetallePedidoDto {
  private constructor(
    public readonly iddetalle: number,
    public readonly idproducto?: number,
    public readonly cantidad?: number,
    public readonly precio?: number,
    public readonly subtotal?: number,
    public readonly costo_envio?: number,
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.idproducto) returnObj.idproducto = this.idproducto;
    if (this.cantidad) returnObj.cantidad = this.cantidad;
    if (this.precio) returnObj.precio = this.precio;
    if (this.subtotal) returnObj.subtotal = this.subtotal;
    if (this.costo_envio) returnObj.costo_envio = this.costo_envio;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateDetallePedidoDto?] {
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