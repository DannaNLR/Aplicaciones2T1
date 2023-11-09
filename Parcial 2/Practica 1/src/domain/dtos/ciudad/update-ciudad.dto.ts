export class UpdateCiudadDto {
    private constructor(
      public readonly ciudad?: string,
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.ciudad !== undefined) returnObj.ciudad = this.ciudad;  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateCiudadDto?] {

      const {ciudad, direcciones } = props;
  
      if ((ciudad === undefined && direcciones === undefined)) {
        return [
          'El ID de la ciudad debe ser un número válido y al menos una propiedad debe proporcionarse',
          undefined
        ];
      }
  
      return [undefined, new UpdateCiudadDto(ciudad)];
    }
  }
  