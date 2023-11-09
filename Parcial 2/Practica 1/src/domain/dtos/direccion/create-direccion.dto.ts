export class CreateDireccionDto {
    constructor(
      public readonly CI: number,
      public readonly id_ciudad: number,
      public readonly id_referencia: number,
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateDireccionDto?] {

      const { CI, id_ciudad, id_referencia } = props;
  
      if (CI === undefined || id_ciudad === undefined || id_referencia === undefined) {
        return ['Entrada no válida. Todos los campos son obligatorios.', undefined];
    }
  
      if (typeof CI !== 'number' || typeof id_ciudad !== 'number' || typeof id_referencia !== 'number') {
        return ['Entrada no válida. Todos los campos deben ser del tipo de datos correcto.', undefined];
    }
  
      return [undefined, new CreateDireccionDto(CI, id_ciudad, id_referencia)];
    }
  }
  