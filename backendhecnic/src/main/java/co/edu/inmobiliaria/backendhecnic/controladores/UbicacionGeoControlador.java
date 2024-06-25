package co.edu.inmobiliaria.backendhecnic.controladores;

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

import co.edu.inmobiliaria.backendhecnic.modelos.UbicacionGeo;
import co.edu.inmobiliaria.backendhecnic.servicios.UbicacionGeoService;

@RestController
@RequestMapping("/ubicacionesgeograficas")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class UbicacionGeoControlador {
    @Autowired
    private UbicacionGeoService service;

    @GetMapping
    public List<UbicacionGeo> listAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public UbicacionGeo getById(@PathVariable int id) {
        return service.findById(id);
    }

    @PostMapping
    public UbicacionGeo create(@RequestBody UbicacionGeo ubicacionGeo) {
        return service.save(ubicacionGeo);
    }

    @PutMapping("/{id}")
    public UbicacionGeo update(@PathVariable int id, @RequestBody UbicacionGeo ubicacionGeo) {
        UbicacionGeo existing = service.findById(id);
        if (existing != null) {
            ubicacionGeo.setId_ubicacion(id);
            return service.save(ubicacionGeo);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        service.deleteById(id);
    }
}
