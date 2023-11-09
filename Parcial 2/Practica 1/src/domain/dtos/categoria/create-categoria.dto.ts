export class CreateCategoriaDto {
    constructor(
      public readonly descuento: number,
      public readonly precio: number,
      public readonly nombreCategoria: string,
      public readonly idSubCategoria: number | null,
      public readonly idCaracteristica: number | null
    ) {}
  
    static create(props: { [key: string]: any }): [string | undefined, CreateCategoriaDto | undefined] {
      const { descuento, precio, nombreCategoria, idSubCategoria, idCaracteristica } = props;
  
      if (descuento === undefined || precio === undefined || nombreCategoria === undefined) {
        return ['Entrada no válida. Los campos descuento, precio y nombreCategoria son obligatorios.', undefined];
      }
  
      if (typeof descuento !== 'number' || typeof precio !== 'number' || typeof nombreCategoria !== 'string') {
        return ['Entrada no válida. Los campos descuento y precio deben ser números, y nombreCategoria debe ser una cadena.', undefined];
      }
  
      return [undefined, new CreateCategoriaDto(descuento, precio, nombreCategoria, idSubCategoria || null, idCaracteristica || null)];
    }
  }
  