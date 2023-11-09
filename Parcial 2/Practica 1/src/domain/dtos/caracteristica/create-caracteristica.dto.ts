export class CreateCaracteristicaDto {
    private constructor(
      public readonly nombreCaracteristica: string,
      public readonly descripcionCaracteristica: string
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateCaracteristicaDto?] {
      const { nombreCaracteristica, descripcionCaracteristica } = props;
  
      if (!nombreCaracteristica || !descripcionCaracteristica) {
        return ['Los campos nombreCaracteristica y descripcionCaracteristica son obligatorios', undefined];
      }
  
      return [undefined, new CreateCaracteristicaDto(nombreCaracteristica, descripcionCaracteristica)];
    }
  }
  