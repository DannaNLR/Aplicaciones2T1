export class UpdateReferenciaDto {
    private constructor(
      public readonly id_referencia: number,
      public readonly calle_principal?: string,
      public readonly numero_casa?: string,
      public readonly descripcion?: string,
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.calle_principal !== undefined) returnObj.calle_principal = this.calle_principal;
      if (this.numero_casa !== undefined) returnObj.numero_casa = this.numero_casa;
      if (this.descripcion !== undefined) returnObj.descripcion = this.descripcion;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateReferenciaDto?] {

      const { id_referencia, calle_principal, numero_casa, descripcion } = props;
  
      if (isNaN(id_referencia) || (calle_principal === undefined && numero_casa === undefined && descripcion === undefined)) {
        return [
          'El ID de referencia debe ser un número válido y al menos una propiedad debe proporcionarse',
          undefined
        ];
      }
  
      return [undefined, new UpdateReferenciaDto(id_referencia, calle_principal, numero_casa, descripcion)];
    }
  }
  