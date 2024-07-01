
package co.edu.inmobiliaria.backendhecnic.controladores;


import co.edu.inmobiliaria.backendhecnic.modelos.Persona;
import co.edu.inmobiliaria.backendhecnic.servicios.PersonaService;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/personas"})
public class PersonaControlador {
    @Autowired
    PersonaService service;
    
    @GetMapping("/submit")
    public List<Persona> listar(){
        return service.listar();
    }
    
    @PostMapping("/submit")
    public Persona agregar(@RequestBody Persona p){
        return service.add(p);
    }
    
    @GetMapping("/submit/{id_personas}")
    public Persona listarId(@PathVariable("id_personas") int id_personas){
        return service.listarId(id_personas);
    }
        
    @PutMapping("/submit/{id_personas}")
    public Persona editar(@RequestBody Persona p, @PathVariable("id_personas") int id_personas){
        p.setId_personas(id_personas);
        return service.edit(p);
    }
    
    @DeleteMapping("/submit/{id_personas}")
    public Persona delete(@PathVariable("id_personas") int id_personas){
        return service.delete(id_personas);
    }
}

