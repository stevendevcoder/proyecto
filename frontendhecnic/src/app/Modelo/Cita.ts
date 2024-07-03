
export class Cita {
    idCita: number = 0;
    motivo: MotivoCita = MotivoCita.ArrendarPropietario;
    fecha: Date = new Date();
    telefono: string = '';
    correo: string = '';
}
  
export enum MotivoCita {
    Vender = 'Vender',
    ArrendarPropietario = 'ArrendarPropietario',
    Comprar = 'Comprar'
}
  