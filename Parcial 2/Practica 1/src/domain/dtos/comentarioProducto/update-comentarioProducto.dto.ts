export class updateComentarioProductoDto {
    private constructor(
      public readonly idcomentario: number,
      public readonly idproducto?: number,
      public readonly CI?: number,
      public readonly comentario?: string
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.idproducto) returnObj.idproducto = this.idproducto;
      if (this.CI) returnObj.CI = this.CI;
      if (this.comentario) returnObj.comentario = this.comentario;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, updateComentarioProductoDto?] {
      const { idcomentario, idproducto, CI, comentario } = props;
  
      if (!idcomentario || isNaN(Number(idcomentario))) {
        return ['idcomentario debe ser un número válido', undefined];
      }
  
      if (!idproducto && !CI && !comentario) {
        return ['Al menos una propiedad debe ser proporcionada', undefined];
      }
  
      return [undefined, new updateComentarioProductoDto(idcomentario, idproducto, CI, comentario)];
    }
  }
  