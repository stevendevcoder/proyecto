package co.edu.inmobiliaria.backendhecnic.controladores;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import co.edu.inmobiliaria.backendhecnic.modelos.EstudioDeRiesgo;
import co.edu.inmobiliaria.backendhecnic.servicios.EstudioDeRiesgoService;

@RestController
@RequestMapping("/estudios-de-riesgo")
public class EstudioDeRiesgoController {

    @Autowired
    private EstudioDeRiesgoService service;

    @GetMapping("/submit")
    public List<EstudioDeRiesgo> listar() {
        return service.listar();
    }

    @GetMapping("/submit/{id}")
    public ResponseEntity<EstudioDeRiesgo> listarPorId(@PathVariable Long id) {
        Optional<EstudioDeRiesgo> estudio = service.listarPorId(id);
        if (estudio.isPresent()) {
            return ResponseEntity.ok(estudio.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/submit")
    public EstudioDeRiesgo agregar(@RequestBody EstudioDeRiesgo estudio) {
        return service.agregar(estudio);
    }

    @PutMapping("/submit/{id}")
    public ResponseEntity<EstudioDeRiesgo> actualizar(@RequestBody EstudioDeRiesgo estudio, @PathVariable Long id) {
        Optional<EstudioDeRiesgo> optionalEstudio = service.listarPorId(id);
        if (optionalEstudio.isPresent()) {
            estudio.setIdEstudio(id);
            return ResponseEntity.ok(service.actualizar(estudio));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/submit/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        Optional<EstudioDeRiesgo> optionalEstudio = service.listarPorId(id);
        if (optionalEstudio.isPresent()) {
            service.eliminar(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
