package co.edu.inmobiliaria.backendhecnic.servicios;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.inmobiliaria.backendhecnic.modelos.Cita;
import co.edu.inmobiliaria.backendhecnic.repositorios.CitaRepository;

@Service
public class CitaService {

    @Autowired
    private CitaRepository repository;

    public List<Cita> listar() {
        return repository.findAll();
    }

    public Optional<Cita> listarId(Long id) {
        return repository.findById(id);
    }

    public Cita add(Cita c) {
        return repository.save(c);
    }

    public Cita edit(Cita c) {
        return repository.save(c);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
