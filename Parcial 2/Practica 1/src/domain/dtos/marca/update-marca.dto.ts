export class updateMarcaDto {
    private constructor(
      public readonly idmarca: number,
      public readonly nombre?: string,
      public readonly idproducto?: number,
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.nombre) returnObj.nombre = this.nombre;
      if (this.idproducto) returnObj.idproducto = this.idproducto;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, updateMarcaDto?] {
      const { idmarca, nombre, idproducto } = props;
  
      if (!idmarca || isNaN(Number(idmarca))) {
        return ['id debe ser un número válido', undefined];
      }
  
      if (!nombre && !idproducto) {
        return ['Al menos una propiedad debe ser proporcionada', undefined];
      }
  
      return [undefined, new updateMarcaDto(idmarca, nombre, idproducto)];
    }
  }
  