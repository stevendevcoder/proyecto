package co.edu.inmobiliaria.backendhecnic.servicios;

import co.edu.inmobiliaria.backendhecnic.modelos.Avaluo;
import co.edu.inmobiliaria.backendhecnic.modelos.Inmueble;
import co.edu.inmobiliaria.backendhecnic.repositorios.AvaluoRepository;
import co.edu.inmobiliaria.backendhecnic.repositorios.InmuebleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InmuebleService {

    @Autowired
    private InmuebleRepository repositorio;

    @Autowired
    private AvaluoRepository avaluoRepository;

    public List<Inmueble> listar() {
        return repositorio.findAll();
    }

    public Optional<Inmueble> listarId(Long id) {
        return repositorio.findById(id);
    }

    public Inmueble add(Inmueble p) {
        return repositorio.save(p);
    }

    public Inmueble edit(Inmueble p) {
        return repositorio.save(p);
    }

    public void delete(Long id) {
        List<Avaluo> avaluos = avaluoRepository.findAvaluosByInmuebleId(id);

        //Primero eliminamos todos los avaluos relacionados a ese inmueble
        for (Avaluo avaluo : avaluos) {
            avaluoRepository.delete(avaluo);
        }
        // Eliminar el inmueble
        repositorio.deleteById(id);
    }

    //AVALUOS

    public Optional<Inmueble> findById(Long idInmueble) {
        throw new UnsupportedOperationException("Unimplemented method 'findById'");
    }
}
