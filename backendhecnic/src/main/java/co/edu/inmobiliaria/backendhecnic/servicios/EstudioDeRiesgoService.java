package co.edu.inmobiliaria.backendhecnic.servicios;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.inmobiliaria.backendhecnic.modelos.EstudioDeRiesgo;
import co.edu.inmobiliaria.backendhecnic.repositorios.EstudioDeRiesgoRepository;

@Service
public class EstudioDeRiesgoService {

    @Autowired
    private EstudioDeRiesgoRepository repository;

    public List<EstudioDeRiesgo> listar() {
        return repository.findAll();
    }

    public Optional<EstudioDeRiesgo> listarPorId(Long id) {
        return repository.findById(id);
    }

    public EstudioDeRiesgo agregar(EstudioDeRiesgo estudio) {
        return repository.save(estudio);
    }

    public EstudioDeRiesgo actualizar(EstudioDeRiesgo estudio) {
        return repository.save(estudio);
    }

    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}