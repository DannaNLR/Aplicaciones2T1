export class createComentarioProductoDto {
    private constructor(
      public readonly idproducto: number,
      public readonly CI: number,
      public readonly comentario: string
    ) {}
  
    static create(props: {
      idproducto: number;
      CI: number;
      comentario: string;
    }): [string?, createComentarioProductoDto?] {
      const { idproducto, CI, comentario } = props;
  
      if (!idproducto || isNaN(Number(idproducto))) {
        return ['El campo idproducto debe ser un número válido', undefined];
      }
  
      if (!CI || isNaN(Number(CI))) {
        return ['El campo CI debe ser un número válido', undefined];
      }
  
      if (!comentario) {
        return ['El campo comentario es requerido', undefined];
      }
  
      return [undefined, new createComentarioProductoDto(idproducto, CI, comentario)];
    }
  }
  