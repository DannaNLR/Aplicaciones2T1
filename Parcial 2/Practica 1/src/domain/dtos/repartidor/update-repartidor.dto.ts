export class UpdateRepartidorDto {
  private constructor(
    public readonly id_repartidor: number,
    public readonly Nombre?: string,
    public readonly Telefono?: string,
    public readonly Correo?: string,
    public readonly Cedula?: string
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.Nombre) returnObj.Nombre = this.Nombre;
    if (this.Telefono) returnObj.Telefono = this.Telefono;
    if (this.Correo) returnObj.Correo = this.Correo;
    if (this.Cedula) returnObj.Cedula = this.Cedula;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateRepartidorDto?] {
    const { id_repartidor, Nombre, Telefono, Correo, Cedula } = props;

    if (!id_repartidor || isNaN(Number(id_repartidor))) {
      return ['id_repartidor debe ser un número válido', undefined];
    }

    if (!Nombre && !Telefono && !Correo && !Cedula) {
      return ['Al menos una propiedad debe ser proporcionada', undefined];
    }

    return [undefined, new UpdateRepartidorDto(id_repartidor, Nombre, Telefono, Correo, Cedula)];
  }
}