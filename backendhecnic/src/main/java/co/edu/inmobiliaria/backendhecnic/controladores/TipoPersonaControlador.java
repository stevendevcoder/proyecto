package co.edu.inmobiliaria.backendhecnic.controladores;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import co.edu.inmobiliaria.backendhecnic.modelos.TipoPersona;
import co.edu.inmobiliaria.backendhecnic.servicios.TipoPersonaService;

@RestController
@RequestMapping("/tipospersona")
public class TipoPersonaControlador {
    
    @Autowired
    private TipoPersonaService tipoPersonaService;

    @GetMapping("/submit")
    public List<TipoPersona> listarTodos() {
        return tipoPersonaService.listarTodos();
    }

    @GetMapping("/submit/{id}")
    public Optional<TipoPersona> obtenerPorId(@PathVariable Integer id) {
        return tipoPersonaService.obtenerPorId(id);
    }

    @PostMapping("/submit")
    public TipoPersona crear(@RequestBody TipoPersona tipoPersona) {
        return tipoPersonaService.crear(tipoPersona);
    }
    /* 
    @DeleteMapping("/submit/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
        try {
            tipoPersonaService.eliminar(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }*/
}