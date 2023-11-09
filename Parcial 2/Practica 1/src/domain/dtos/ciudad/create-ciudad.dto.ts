export class CreateCiudadDto {
    constructor(
      public readonly ciudad: string,
    ) {}
  
    static create(props: {
      ciudad: string;
    }): [string?, CreateCiudadDto?] {
      const { ciudad } = props;
  
      if (
        !ciudad ||
        typeof ciudad !== 'string'
      ) {
        return [
          'Entrada no válida. la ciudad y la lista de direcciones son obligatorias, y las direcciones deben ser cadenas de texto.',
          undefined
        ];
      }
  
      return [undefined, new CreateCiudadDto(ciudad)];
    }
  }
  