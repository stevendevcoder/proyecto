/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.edu.inmobiliaria.backendhecnic.controladores;

import jakarta.persistence.*;

import co.edu.inmobiliaria.backendhecnic.modelos.Inmueble;
import co.edu.inmobiliaria.backendhecnic.servicios.InmuebleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public Inmueble listarId(@PathVariable("id") int id) {
        return service.listarId(id);
    }

    @PutMapping("/submit/{id}")
    public Inmueble editar(@RequestBody Inmueble i, @PathVariable("id") int id) {
        i.setIdInmueble(id);
        return service.edit(i);
    }

    @DeleteMapping("/submit/{id}")
    public Inmueble eliminar(@PathVariable("id") int id) {
        return service.delete(id);
    }
}
