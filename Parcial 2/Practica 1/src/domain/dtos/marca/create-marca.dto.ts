export class createMarcaDto {
    private constructor(
      public readonly nombre: string,
      public readonly idproducto: number,
    ) {}
  
    static create(props: {
      nombre: string;
      idproducto: number;
    }): [string?, createMarcaDto?] {
      const { nombre, idproducto } = props;
      
      if (!nombre) {
        return ['nombre es un campo requerido', undefined];
      }

      if (nombre.length > 50) {
        return ['nombre no puede tener más de 50 caracteres', undefined];
      }
  
      if (!idproducto || isNaN(Number(idproducto))) {
        return ['idproducto debe ser un número válido', undefined];
      }
  
      return [undefined, new createMarcaDto(nombre, idproducto)];
    }
  }
  