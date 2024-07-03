import { Inmueble } from "./Inmueble";
import { Persona } from "./Persona";

export class Avaluo {
    id_avaluo: number = 0;
    inmueble: Inmueble = new Inmueble();
    empleado: Persona = new Persona();
    fechaAvaluo: Date = new Date();
    valorAvaluo: number = 0;
    descripcion: string = '';
}

export class AvaluoDTO {
    idAvaluo: number = 0;
    idInmueble: number = 0;
    idEmpleado: number = 0;
    fechaAvaluo: Date = new Date();
    valorAvaluo: number = 0;
    descripcion: string = '';
}