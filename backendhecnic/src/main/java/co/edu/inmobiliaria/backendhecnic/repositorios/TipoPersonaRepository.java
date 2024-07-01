package co.edu.inmobiliaria.backendhecnic.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import co.edu.inmobiliaria.backendhecnic.modelos.TipoPersona;

@Repository
public interface TipoPersonaRepository extends JpaRepository<TipoPersona, Integer> {

    @SuppressWarnings("unchecked")
    TipoPersona save(TipoPersona tipoPersona);

    List<TipoPersona> findAll();

    TipoPersona findById(int id);

    void deleteById(int id);

}
