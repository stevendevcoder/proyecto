/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.edu.inmobiliaria.backendhecnic.controladores;

import co.edu.inmobiliaria.backendhecnic.modelos.Avaluo;
import co.edu.inmobiliaria.backendhecnic.modelos.AvaluoDTO;
import co.edu.inmobiliaria.backendhecnic.modelos.Inmueble;
import co.edu.inmobiliaria.backendhecnic.modelos.InmuebleDTO;
import co.edu.inmobiliaria.backendhecnic.servicios.InmuebleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/inmuebles")
public class InmuebleControlador {

    @Autowired
    InmuebleService service;

    @GetMapping("/submit")
    public List<Inmueble> listar() {
        return service.listar();
    }

    @PostMapping("/submit")
    public Inmueble agregar(@RequestBody Inmueble i) {
        return service.add(i);
    }

    @GetMapping("/submit/{id}")
    public Optional<Inmueble> listarId(@PathVariable("id") Long id) {
        return service.listarId(id);
    }

    @PutMapping("/submit/{id}")
    public Inmueble editar(@RequestBody Inmueble i, @PathVariable("id") Long id) {
        i.setIdInmueble(id);
        return service.edit(i);
    }

    @DeleteMapping("/submit/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable("id") Long id) {
        service.delete(id);
        return ResponseEntity.ok().build();
    }

    private AvaluoDTO convertirAvaluoADTO(Avaluo avaluo) {
        AvaluoDTO dto = new AvaluoDTO();
        dto.setIdAvaluo(avaluo.getIdAvaluo());
        dto.setIdInmueble(avaluo.getInmueble().getIdInmueble());
        dto.setIdEmpleado(Long.valueOf(avaluo.getEmpleado().getId_personas()));
        dto.setFechaAvaluo(avaluo.getFechaAvaluo());
        dto.setValorAvaluo(avaluo.getValorAvaluo());
        dto.setDescripcion(avaluo.getDescripcion());
        return dto;
    }

}
