package co.edu.inmobiliaria.backendhecnic.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import co.edu.inmobiliaria.backendhecnic.modelos.Avaluo;
import co.edu.inmobiliaria.backendhecnic.modelos.Inmueble;

public interface AvaluoRepository extends JpaRepository<Avaluo, Long> {

    @Query("SELECT a FROM Avaluo a WHERE a.inmueble.idInmueble = :idInmueble")
    List<Avaluo> findAvaluosByInmuebleId(@Param("idInmueble") Long idInmueble);

    Avaluo save(Avaluo p);
}
