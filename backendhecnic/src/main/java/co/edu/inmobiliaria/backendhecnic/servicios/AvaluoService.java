package co.edu.inmobiliaria.backendhecnic.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.inmobiliaria.backendhecnic.modelos.Avaluo;
import co.edu.inmobiliaria.backendhecnic.modelos.Inmueble;
import co.edu.inmobiliaria.backendhecnic.repositorios.AvaluoRepository;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class AvaluoService {

    @Autowired
    private AvaluoRepository avaluoRepository;


    public Avaluo guardarAvaluo(Avaluo avaluo) {
        return avaluoRepository.save(avaluo);
    }

    public List<Avaluo> obtenerTodosLosAvaluos() {
        return avaluoRepository.findAll();
    }


    public Avaluo obtenerAvaluoPorId(Long id) {
        return avaluoRepository.findById(id).orElse(null);
    }

    public Avaluo edit(Avaluo p) {
        return avaluoRepository.save(p);
    }

    public void eliminarAvaluo(Long id) {
        avaluoRepository.deleteById(id);
    }
    public List<Avaluo> obtenerAvaluosPorInmueble(Long idInmueble) {
        return avaluoRepository.findAvaluosByInmuebleId(idInmueble);
    }

}
