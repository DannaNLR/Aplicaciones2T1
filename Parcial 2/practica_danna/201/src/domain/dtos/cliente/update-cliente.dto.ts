export class updateClienteDto {
    private constructor(
      public readonly CI: number,
      public readonly idrol?: number,
      public readonly nombre?: string,
      public readonly apellido?: string,
      public readonly telefono?: string,
      public readonly correo?: string,
      public readonly contrasena?: string
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.idrol) returnObj.idrol = this.idrol;
      if (this.nombre) returnObj.nombre = this.nombre;
      if (this.apellido) returnObj.apellido = this.apellido;
      if (this.telefono) returnObj.telefono = this.telefono;
      if (this.correo) returnObj.correo = this.correo;
      if (this.contrasena) returnObj.contrasena = this.contrasena;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, updateClienteDto?] {
      const { CI, idrol, nombre, apellido, telefono, correo, contrasena } = props;
  
      if (!CI || isNaN(Number(CI))) {
        return ['CI debe ser un número válido', undefined];
      }
  
      if (!idrol && !nombre && !apellido && !telefono && !correo && !contrasena) {
        return ['Al menos una propiedad debe ser proporcionada', undefined];
      }
  
      return [undefined, new updateClienteDto(CI, idrol, nombre, apellido, telefono, correo, contrasena)];
    }
  }
  
  