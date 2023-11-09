export class UpdateCategoriaDto {
    private constructor(
      public readonly idCategoria: number,
      public readonly descuento?: number,
      public readonly precio?: number,
      public readonly nombreCategoria?: string,
      public readonly idSubCategoria?: number | null,
      public readonly idCaracteristica?: number | null
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.descuento !== undefined) returnObj.descuento = this.descuento;
      if (this.precio !== undefined) returnObj.precio = this.precio;
      if (this.nombreCategoria !== undefined) returnObj.nombreCategoria = this.nombreCategoria;
      if (this.idSubCategoria !== undefined) returnObj.idSubCategoria = this.idSubCategoria;
      if (this.idCaracteristica !== undefined) returnObj.idCaracteristica = this.idCaracteristica;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string | undefined, UpdateCategoriaDto | undefined] {
      const { idCategoria, descuento, precio, nombreCategoria, idSubCategoria, idCaracteristica } = props;
  
      if (!idCategoria || isNaN(Number(idCategoria))) {
        return ['idCategoria debe ser un número válido', undefined];
      }
  
      if (!descuento && !precio && !nombreCategoria && idSubCategoria === undefined && idCaracteristica === undefined) {
        return ['Al menos una propiedad debe ser proporcionada', undefined];
      }
  
      return [undefined, new UpdateCategoriaDto(idCategoria, descuento, precio, nombreCategoria, idSubCategoria || null, idCaracteristica || null)];
    }
  }
  