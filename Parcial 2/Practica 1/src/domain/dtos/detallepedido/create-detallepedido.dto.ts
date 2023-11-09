export class CreateDetallePedidoDto {
  private constructor(
    public readonly idpedido: number,
    public readonly idproducto: number,
    public readonly Cantidad: number,
    public readonly Precio: number,
    public readonly Subtotal: number,
    public readonly Costo_envio: number,
  ) {}

  static create(props: {
    idpedido: number;
    idproducto: number;
    Cantidad: number;
    Precio: number;
    Subtotal: number;
    Costo_envio: number;
  }): [string?, CreateDetallePedidoDto?] {
    const {
      idpedido,
      idproducto,
      Cantidad,
      Precio,
      Subtotal,
      Costo_envio,
    } = props;

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
      new CreateDetallePedidoDto(
        idpedido,
        idproducto,
        Cantidad,
        Precio,
        Subtotal,
        Costo_envio,
      )];
  }
}