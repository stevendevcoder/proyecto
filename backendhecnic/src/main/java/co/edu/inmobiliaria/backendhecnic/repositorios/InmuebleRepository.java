package co.edu.inmobiliaria.backendhecnic.repositorios;

import co.edu.inmobiliaria.backendhecnic.modelos.Inmueble;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface InmuebleRepository extends JpaRepository<Inmueble, Long> {
    // Método para buscar todos los inmuebles
    List<Inmueble> findAll();

    // Método para buscar un inmueble por su id
    Optional<Inmueble> findById(Long id);

    // Método para guardar un inmueble
    @SuppressWarnings("unchecked")
    Inmueble save(Inmueble inmueble);

    // Método para eliminar un inmueble por su id
    void deleteById(Long id);

    @Transactional
    @Modifying
    @Query("DELETE FROM Inmueble i WHERE i.cliente.id_personas = :clienteId")
    void deleteByClienteId(@Param("clienteId") int clienteId);
}
