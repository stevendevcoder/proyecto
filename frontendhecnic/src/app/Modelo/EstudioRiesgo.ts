import { Inmueble } from "./Inmueble";

export enum Resultado {
    Positivo = 'Positivo',
    Negativo = 'Negativo'
}

export enum EstadoEstudio {
    Pendiente = 'Pendiente',
    Aceptado = 'Aceptado',
    Rechazado = 'Rechazado'
}

export class EstudioRiesgo {    
    id_estudio: number = 0;
    inmueble: Inmueble = new Inmueble();
    estado: string = 'Pendiente';
    fechaEstudio: Date = new Date();
    resultadoListaClinton: Resultado = Resultado.Negativo;
    resultadoCentral: Resultado = Resultado.Negativo;
    certificadoLibertad: Resultado = Resultado.Negativo;

    constructor(inmueble: Inmueble = new Inmueble(), fecha: Date){
        this.inmueble = inmueble;
        this.estado = 'Pendiente';
        this.fechaEstudio = fecha;
        this.resultadoListaClinton = Math.random() < 0.5 ? Resultado.Negativo : Resultado.Positivo;
        this.resultadoCentral = Math.random() < 0.5 ? Resultado.Positivo : Resultado.Negativo;
        this.certificadoLibertad = Math.random() < 0.5 ? Resultado.Negativo : Resultado.Positivo;
    }
}