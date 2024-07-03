package co.edu.inmobiliaria.backendhecnic.controladores;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.edu.inmobiliaria.backendhecnic.modelos.Cita;
import co.edu.inmobiliaria.backendhecnic.servicios.CitaService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/citas")
public class CitaControlador {

    @Autowired
    private CitaService service;

    @GetMapping("/submit")
    public List<Cita> listar() {
        return service.listar();
    }

    @PostMapping("/submit")
    public Cita agregar(@RequestBody Cita c) {
        return service.add(c);
    }

    @GetMapping("/submit/{id}")
    public Optional<Cita> listarId(@PathVariable("id") Long id) {
        return service.listarId(id);
    }

    @PutMapping("/submit/{id}")
    public Cita editar(@RequestBody Cita c, @PathVariable("id") Long id) {
        c.setIdCita(id);
        return service.edit(c);
    }

    @DeleteMapping("/submit/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable("id") Long id) {
        service.delete(id);
        return ResponseEntity.ok().build();
    }
}