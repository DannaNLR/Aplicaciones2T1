export class CreateReferenciaDto {
    constructor(
      public readonly calle_principal: string,
      public readonly numero_casa: string,
      public readonly descripcion: string,
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateReferenciaDto?] {

      const { calle_principal, numero_casa, descripcion } = props;
  
      if (
        !calle_principal ||
        !numero_casa ||
        !descripcion ||
        typeof calle_principal !== 'string' ||
        typeof numero_casa !== 'string' ||
        typeof descripcion !== 'string'
      ) {
        return [
          'Entrada no válida. Todos los campos son obligatorios y deben ser cadenas de texto.',
          undefined
        ];
      }
  
      return [undefined, new CreateReferenciaDto(calle_principal, numero_casa, descripcion)];
    }
  }
  