import { UbicacionGeo } from "./UbicacionGeo";

export class Sucursal {
    id_sucursales: number = 0;
    nombreSucursal: string = '';
    direccion: string = '';
    telefono: string = '';
    ubicacion: UbicacionGeo = new UbicacionGeo();

    constructor(){}
}