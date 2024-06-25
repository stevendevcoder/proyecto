package co.edu.inmobiliaria.backendhecnic.repositorios;

import co.edu.inmobiliaria.backendhecnic.modelos.Inmueble;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface InmuebleRepository extends JpaRepository<Inmueble, Integer> {
    // Método para buscar todos los inmuebles
    List<Inmueble> findAll();

    // Método para buscar un inmueble por su id
    Inmueble findById(int id);

    // Método para guardar un inmueble
    Inmueble save(Inmueble inmueble);

    // Método para eliminar un inmueble por su id
    void deleteById(int id);
}
