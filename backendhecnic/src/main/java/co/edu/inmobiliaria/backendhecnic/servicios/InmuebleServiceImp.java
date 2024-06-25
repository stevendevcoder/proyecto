package co.edu.inmobiliaria.backendhecnic.servicios;

import co.edu.inmobiliaria.backendhecnic.modelos.Inmueble;
import co.edu.inmobiliaria.backendhecnic.repositorios.InmuebleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InmuebleServiceImp implements InmuebleService {

    @Autowired
    private InmuebleRepository repositorio;

    @Override
    public List<Inmueble> listar() {
        return repositorio.findAll();
    }

    @Override
    public Inmueble listarId(int id) {
        return repositorio.findById(id);
    }

    @Override
    public Inmueble add(Inmueble i) {
        return repositorio.save(i);
    }

    @Override
    public Inmueble edit(Inmueble i) {
        return repositorio.save(i);
    }

    @Override
    public Inmueble delete(int id) {
        Inmueble i = repositorio.findById(id);
        if (i != null) {
            repositorio.deleteById(id);
        }
        return i;
    }
}
