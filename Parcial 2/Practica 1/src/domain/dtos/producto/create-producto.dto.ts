export class createProductoDto {
  private constructor(
    public readonly idCategoria: number,
    public readonly nombre: string,
    public readonly precio: number,
    public readonly descripcion?: string
    
  ) {}

  static create(props: {
    idCategoria: number;
    nombre: string;
    descripcion?: string;
    precio: number;
  }): [string?, createProductoDto?] {
    const { idCategoria, nombre, descripcion, precio } = props;
    
    if (!idCategoria || isNaN(Number(idCategoria))) {
      return ['idcategoria debe ser un número válido', undefined];
    }
    if (nombre.length > 50) {
      return ['El nombre no puede tener más de 50 caracteres.', undefined];
    }
    if (descripcion && descripcion.length > 255) {
      return ['La descripcion no puede tener más de 250 caracteres.', undefined];
    }
    if (nombre === undefined || idCategoria === undefined || precio === undefined) {

      return ['nombre, idcategoria y precio son requeridos', undefined];
    }

    return [undefined, new createProductoDto(idCategoria, nombre, precio, descripcion)];
  }
}
  