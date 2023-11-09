export class UpdatePedidoDto {
  private constructor(
    public readonly idpedido: number,
    public readonly id_repartidor?: number,
    public readonly Fecha?: Date,
    public readonly Total?: number,
    public readonly entregado?: boolean,
    public readonly direccion_envio?: string
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.id_repartidor) returnObj.id_repartidor = this.id_repartidor;
    if (this.Fecha) returnObj.Fecha = this.Fecha;
    if (this.Total) returnObj.Total = this.Total;
    if (this.entregado !== undefined) returnObj.entregado = this.entregado;
    if (this.direccion_envio) returnObj.direccion_envio = this.direccion_envio;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdatePedidoDto?] {
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