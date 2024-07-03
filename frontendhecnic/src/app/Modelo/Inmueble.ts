import { Persona } from "./Persona";
import { UbicacionGeo } from "./UbicacionGeo";

export class Inmueble {
    idInmueble: number = 0;
    descripcion: string = '';
    precio: number = 0;
    tipo: TipoInmueble = TipoInmueble.Apartamento;
    estado: EstadoInmueble = EstadoInmueble.Revision;
    negocio: TipoNegocio = TipoNegocio.Venta;
    cliente: Persona = new Persona();
    ciudad: UbicacionGeo = new UbicacionGeo;
    habitaciones: number = 0;
    estrato: number = 0;
    direccion: string = '';
    imagen: string = ''; 
  
  }
  
  export enum TipoInmueble {
    Casa = 'Casa',
    Apartamento = 'Apartamento',
    Oficina = 'Oficina'
  }
  
  export enum EstadoInmueble {
    Revision = 'Revision',
    Disponible = 'Disponible',
    Vendido = 'Vendido',
    Arrendado = 'Arrendado'
  }

  export enum TipoNegocio {
    Arriendo = 'Arriendo',
    Venta = 'Venta'
  }