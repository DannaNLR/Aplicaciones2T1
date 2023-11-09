export class createFotoDto {
    private constructor(
      public readonly idproducto: number,
      public readonly archivo: string,
      public readonly descripcion?: string,
    ) {}
  
    static create(props: {
      idproducto: number;
      archivo: string;
      descripcion?: string;
    }): [string?, createFotoDto?] {
      const { idproducto, archivo, descripcion } = props;

      if (!idproducto || isNaN(Number(idproducto))) {
        return ['idproducto debe ser un número válido', undefined];
      }
      
      if (!archivo) {
        return ['archivo es un campo requerido', undefined];
      }

      if (descripcion && descripcion.length > 255) {
        return ['La descripción no puede exceder los 255 caracteres', undefined];
      }
      return [undefined, new createFotoDto(idproducto, archivo, descripcion)];
    }
  }
  