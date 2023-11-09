export class CreateRepartidorDto {
  private constructor(
    public readonly Nombre: string,
    public readonly Telefono: string,
    public readonly Correo: string,
    public readonly Cedula: string
  ) {}

  static create(props: {
    Nombre: string;
    Telefono: string;
    Correo: string;
    Cedula: string;
  }): [string?, CreateRepartidorDto?] {
    const { Nombre, Telefono, Correo, Cedula } = props;

    if (Nombre.length > 50) {
      return ['El nombre no puede tener más de 50 caracteres.', undefined];
    }
    if (Cedula.length > 10) {
      return ['La cédula no puede tener más de 20 caracteres.', undefined];
    }
    if (Telefono.length > 20) {
      return ['El teléfono no puede tener más de 20 caracteres.', undefined];
    }
    if (Correo.length > 100) {
      return ['El correo no puede tener más de 100 caracteres.', undefined];
    }

    return [undefined, new CreateRepartidorDto(Nombre, Telefono, Correo, Cedula)];
  }
}