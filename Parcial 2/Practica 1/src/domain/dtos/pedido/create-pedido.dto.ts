export class CreatePedidoDto {
  private constructor(
    public readonly CI: number,
    public readonly id_repartidor: number,
    public readonly Fecha: Date,
    public readonly Total: number,
    public readonly entregado: boolean,
    public readonly direccion_envio: string
  ) {}

  static create(props: {
    CI: number;
    id_repartidor: number;
    Fecha: Date;
    Total: number;
    entregado: boolean;
    direccion_envio: string;
  }): [string?, CreatePedidoDto?] {
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
