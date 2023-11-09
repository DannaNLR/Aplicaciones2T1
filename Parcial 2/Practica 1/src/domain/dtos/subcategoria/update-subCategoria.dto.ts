export class UpdateSubCategoriaDto {
    private constructor(
      public readonly idSubCategoria: number,
      public readonly color?: string,
      public readonly talla?: string,
      public readonly descripcion?: string
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.color !== undefined) returnObj.color = this.color;
      if (this.talla !== undefined) returnObj.talla = this.talla;
      if (this.descripcion !== undefined) returnObj.descripcion = this.descripcion;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string | undefined, UpdateSubCategoriaDto | undefined] {
      const { idSubCategoria, color, talla, descripcion } = props;
  
      if (!idSubCategoria || isNaN(Number(idSubCategoria))) {
        return ['idSubCategoria debe ser un número válido', undefined];
      }
  
      if (!color && !talla && !descripcion) {
        return ['Al menos una propiedad debe ser proporcionada', undefined];
      }
  
      return [undefined, new UpdateSubCategoriaDto(idSubCategoria, color, talla, descripcion)];
    }
  }
  