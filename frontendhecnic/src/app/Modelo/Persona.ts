export class Persona {
    id_personas: number = 0;
    nombre: string = '';
    telefono: string = '';
    email: string = '';
    tipoPersona: TipoPersona = new TipoPersona();
  
    constructor() {}
  }
  
  export class TipoPersona {
    idTipoPersona: number = 0;
    tipo: Tipo = Tipo.cliente;
  
    constructor() {}
  }
  
  export enum Tipo {
    administrador = 'Administrador',
    empleado = 'Empleado',
    cliente = 'Cliente'
  }