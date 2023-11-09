export class updateFotoDto {
    private constructor(
      public readonly idfoto: number,
      public readonly idproducto?: number,
      public readonly archivo?: string,
      public readonly descripcion?: string,
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};

      if (this.idproducto) returnObj.idproducto = this.idproducto;
      if (this.archivo) returnObj.archivo = this.archivo;
      if (this.descripcion) returnObj.descripcion = this.descripcion;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, updateFotoDto?] {
      const { idfoto, idproducto, archivo, descripcion } = props;
  
      if (!idfoto || isNaN(Number(idfoto))) {
        return ['id debe ser un número válido', undefined];
      }
  
      if (!archivo && !descripcion && !idproducto) {
        return ['Al menos una propiedad debe ser proporcionada', undefined];
      }
  
      return [undefined, new updateFotoDto(idfoto, idproducto, archivo, descripcion)];
    }
  }
  