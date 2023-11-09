export class UpdateDireccionDto {
    private constructor(
      public readonly CI: number,
      public readonly id_ciudad?: number,
      public readonly id_referencia?: number,
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.id_ciudad !== undefined) returnObj.id_ciudad = this.id_ciudad;
      if (this.id_referencia !== undefined) returnObj.id_referencia = this.id_referencia;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateDireccionDto?] {
      const { CI, id_ciudad, id_referencia } = props;
  
      if (isNaN(CI) || (id_ciudad === undefined && id_referencia === undefined)) {
        return ['El CI debe ser un número válido y al menos una propiedad debe proporcionarse', undefined];
      }
  
      return [undefined, new UpdateDireccionDto(CI, id_ciudad, id_referencia)];
    }
  }
  