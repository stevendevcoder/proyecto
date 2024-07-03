import { Inmueble } from "./Inmueble";

export enum Resultado {
    positivo = 'Positivo',
    negativo = 'Negativo'
}

export enum EstadoEstudio {
    pendiente = 'Pendiente',
    aceptado = 'Aceptado',
    rechazado = 'Rechazado'
}

export class EstudioRiesgo {    
    id_estudio: number = 0;
    inmueble: Inmueble = new Inmueble();
    estado: EstadoEstudio = EstadoEstudio.pendiente;
    fechaEstudio: Date = new Date();
    resultadoListaClinton: Resultado = Resultado.negativo;
    resultadoCentral: Resultado = Resultado.negativo;
    certificadoLibertad: Resultado = Resultado.negativo;

    constructor(inmueble: Inmueble = new Inmueble(), fecha: Date){
        this.inmueble = inmueble;
        this.estado = EstadoEstudio.pendiente
        this.fechaEstudio = fecha;
        this.resultadoListaClinton = this.r() ? Resultado.negativo : Resultado.positivo;
        this.resultadoCentral = this.r() ? Resultado.positivo : Resultado.negativo;
        this.certificadoLibertad = this.r() ? Resultado.negativo : Resultado.positivo;
    }

    r = (): boolean => {
        return Math.random() < 0.5;
    }

    
}