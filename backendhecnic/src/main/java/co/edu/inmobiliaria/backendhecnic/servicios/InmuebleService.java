package co.edu.inmobiliaria.backendhecnic.servicios;

import co.edu.inmobiliaria.backendhecnic.modelos.Inmueble;
import java.util.List;

public interface InmuebleService {
    List<Inmueble> listar();

    Inmueble listarId(int id);

    Inmueble add(Inmueble i);

    Inmueble edit(Inmueble i);

    Inmueble delete(int id);
}