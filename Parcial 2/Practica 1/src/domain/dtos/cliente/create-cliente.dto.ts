export class createClienteDto {
    private constructor(
      public readonly CI: number,
      public readonly idrol: number,
      public readonly nombre: string,
      public readonly apellido: string,
      public readonly telefono: string,
      public readonly correo: string,
      public readonly contrasena: string,
    ) {}
  
    static create(props: {
      CI: number;
      idrol: number;
      nombre: string;
      apellido: string;
      telefono: string;
      correo: string;
      contrasena: string;
    }): [string?, createClienteDto?] {
      const { CI, idrol, nombre, apellido, telefono, correo, contrasena } = props;

      if (!CI || isNaN(Number(CI)) || CI <= 0) {
        return ['El campo "CI" debe ser un número válido mayor que 0', undefined];
      }
      
      if (!idrol || isNaN(Number(idrol))) {
        return ['idrol debe ser un número válido', undefined];
      }
  
      if (!nombre || nombre.length > 50) {
        if (!nombre) {
          return ['nombre es un campo requerido', undefined];
        } else {
          return ['nombre no puede tener más de 50 caracteres', undefined];
        }
      }
  
      if (!apellido || apellido.length > 50) {
        if (!apellido) {
          return ['apellido es un campo requerido', undefined];
        } else {
          return ['apellido no puede tener más de 50 caracteres', undefined];
        }
      }
  
      if (!telefono || telefono.length > 10) {
        if (!apellido) {
          return ['telefono es un campo requerido', undefined];
        } else {
          return ['telefono no puede tener más de 10 caracteres', undefined];
        }
      }
  
      if (!correo) {
        return ['correo es un campo requerido', undefined];
      }
  
      if (!contrasena) {
        return ['contrasena es un campo requerido', undefined];
      }
  
  
      return [undefined, new createClienteDto(CI, idrol, nombre, apellido, telefono, correo, contrasena)];
    }
  }
  