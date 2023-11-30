export class updateRolDto {
    private constructor(
      public readonly idrol: number,
      public readonly rol?: string,
      public readonly descripcion?: string
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.rol) returnObj.rol = this.rol;
      if (this.descripcion) returnObj.descripcion = this.descripcion;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, updateRolDto?] {
      const { idrol, rol, descripcion } = props;
  
      if (!idrol || isNaN(Number(idrol))) {
        return ['idrol debe ser un número válido', undefined];
      }
  
      if (!rol && !descripcion) {
        return ['Al menos una propiedad debe ser proporcionada', undefined];
      }
  
      return [undefined, new updateRolDto(idrol, rol, descripcion)];
    }
  }
  