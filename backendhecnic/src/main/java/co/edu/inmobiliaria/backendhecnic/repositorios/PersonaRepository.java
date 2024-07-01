
package co.edu.inmobiliaria.backendhecnic.repositorios;

import co.edu.inmobiliaria.backendhecnic.modelos.Persona;
import co.edu.inmobiliaria.backendhecnic.modelos.TipoPersona;

import java.util.List;
import org.springframework.data.repository.Repository;

public interface PersonaRepository extends Repository<Persona, Integer> {
    List<Persona> findAll();

    Persona findById(int id);

    Persona save(Persona p);

    void deleteById(int id);

    long countByTipoPersona(TipoPersona tipoPersona);
}
