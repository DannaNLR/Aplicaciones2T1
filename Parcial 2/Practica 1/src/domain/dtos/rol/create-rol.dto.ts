export class createRolDto {
    private constructor(
      public readonly rol: string,
      public readonly descripcion: string
    ) {}
  
    static create(props: { 
        rol: string; 
        descripcion: string; 
    }): [string?, createRolDto?] {
      const { rol, descripcion } = props;
  
      if (!rol) {
        return ['El campo rol es requerido', undefined];
      }
  
      if (!descripcion || descripcion.length > 250) {
        if (!descripcion) {
          return ['descripcion es un campo requerido', undefined];
        } else {
          return ['descripcion no puede tener más de 250 caracteres', undefined];
        }
      }
  
      return [undefined, new createRolDto(rol, descripcion)];
    }
  }
  