package co.edu.inmobiliaria.backendhecnic.servicios;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.inmobiliaria.backendhecnic.modelos.TipoPersona;
import co.edu.inmobiliaria.backendhecnic.repositorios.TipoPersonaRepository;

@Service
public class TipoPersonaService {
    @Autowired
    private TipoPersonaRepository tipoPersonaRepo;

    public List<TipoPersona> listarTodos() {
        return tipoPersonaRepo.findAll();
    }

    public Optional<TipoPersona> obtenerPorId(Integer id) {
        return tipoPersonaRepo.findById(id);
    }

    public TipoPersona crear(TipoPersona tipoPersona) {
        return tipoPersonaRepo.save(tipoPersona);
    }
}
