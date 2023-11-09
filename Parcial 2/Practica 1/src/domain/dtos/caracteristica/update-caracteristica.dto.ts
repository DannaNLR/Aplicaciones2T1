export class UpdateCaracteristicaDto {
    private constructor(
      public readonly idCaracteristica: number,
      public readonly nombreCaracteristica?: string,
      public readonly descripcionCaracteristica?: string
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.nombreCaracteristica !== undefined) returnObj.nombreCaracteristica = this.nombreCaracteristica;
      if (this.descripcionCaracteristica !== undefined) returnObj.descripcionCaracteristica = this.descripcionCaracteristica;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string | undefined, UpdateCaracteristicaDto | undefined] {
      const { idCaracteristica, nombreCaracteristica, descripcionCaracteristica } = props;
  
      if (!idCaracteristica || isNaN(Number(idCaracteristica))) {
        return ['idCaracteristica debe ser un número válido', undefined];
      }
  
      if (!nombreCaracteristica && !descripcionCaracteristica) {
        return ['Al menos una propiedad debe ser proporcionada', undefined];
      }
  
      return [undefined, new UpdateCaracteristicaDto(idCaracteristica, nombreCaracteristica, descripcionCaracteristica)];
    }
  }
  