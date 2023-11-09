export class updateProductoDto {
  private constructor(
    public readonly idproducto: number,
    public readonly idCategoria?: number,
    public readonly nombre?: string,
    public readonly descripcion?: string,
    public readonly precio?: number,
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.idCategoria) returnObj.idCategoria = this.idCategoria;
    if (this.nombre) returnObj.nombre = this.nombre;
    if (this.descripcion) returnObj.descripcion = this.descripcion;
    if (this.precio) returnObj.precio = this.precio;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, updateProductoDto?] {
    const { idproducto,idCategoria, nombre, descripcion, precio } = props;

    if (!idproducto || isNaN(Number(idproducto))) {
      return ['id debe ser un número válido', undefined];
    }

    if (!nombre && !descripcion && !precio && !idCategoria) {
      return ['Al menos una propiedad debe ser proporcionada', undefined];
    }

    return [undefined, new updateProductoDto(idproducto, idCategoria, nombre, descripcion, precio)];
  }
}
  