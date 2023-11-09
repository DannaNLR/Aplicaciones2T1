export class CreateSubCategoriaDto {
     constructor(
      public readonly color: string,
      public readonly talla: string,
      public readonly descripcion: string
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateSubCategoriaDto?] {
      const { color, talla, descripcion } = props;
  
      if (!color || !talla || !descripcion) {
        return ['Los campos color, talla y descripcion son obligatorios', undefined];
      }
  
      return [undefined, new CreateSubCategoriaDto(color, talla, descripcion)];
    }
  }
  