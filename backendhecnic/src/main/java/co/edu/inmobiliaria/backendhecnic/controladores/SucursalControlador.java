package co.edu.inmobiliaria.backendhecnic.controladores;

import co.edu.inmobiliaria.backendhecnic.modelos.Sucursal;
import co.edu.inmobiliaria.backendhecnic.servicios.SucursalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/sucursales")
public class SucursalControlador {

    @Autowired
    private SucursalService sucursalService;

    @GetMapping
    public List<Sucursal> getAllSucursales() {
        return sucursalService.getAllSucursales();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Sucursal> getSucursalById(@PathVariable int id) {
        Optional<Sucursal> sucursal = sucursalService.getSucursalById(id);
        if (sucursal.isPresent()) {
            return ResponseEntity.ok(sucursal.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Sucursal createSucursal(@RequestBody Sucursal sucursal) {
        return sucursalService.saveSucursal(sucursal);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Sucursal> updateSucursal(@PathVariable int id, @RequestBody Sucursal sucursalDetails) {
        Optional<Sucursal> sucursal = sucursalService.getSucursalById(id);
        if (sucursal.isPresent()) {
            Sucursal sucursalToUpdate = sucursal.get();
            sucursalToUpdate.setIdUbicacion(sucursalDetails.getIdUbicacion());
            sucursalToUpdate.setNombreSucursal(sucursalDetails.getNombreSucursal());
            sucursalToUpdate.setDireccion(sucursalDetails.getDireccion());
            sucursalToUpdate.setTelefono(sucursalDetails.getTelefono());
            return ResponseEntity.ok(sucursalService.saveSucursal(sucursalToUpdate));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSucursal(@PathVariable int id) {
        sucursalService.deleteSucursal(id);
        return ResponseEntity.noContent().build();
    }
}