package co.edu.inmobiliaria.backendhecnic.controladores;

import co.edu.inmobiliaria.backendhecnic.modelos.Sucursal;
import co.edu.inmobiliaria.backendhecnic.modelos.UbicacionGeo;
import co.edu.inmobiliaria.backendhecnic.servicios.SucursalService;
import co.edu.inmobiliaria.backendhecnic.servicios.UbicacionGeoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({"/sucursales"})
public class SucursalControlador {

    @Autowired
    private SucursalService sucursalService;

    @Autowired
    private UbicacionGeoService ubicacionGeoService;

    @GetMapping("/submit")
    public List<Sucursal> getAllSucursales() {
        return sucursalService.getAllSucursales();
    }

    @GetMapping("/submit/{id}")
    public ResponseEntity<Sucursal> getSucursalById(@PathVariable int id) {
        Optional<Sucursal> sucursal = sucursalService.getSucursalById(id);
        return sucursal.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/submit")
    public ResponseEntity<?> createSucursal(@RequestBody Sucursal sucursal) {
        try {
            UbicacionGeo ubicacion = ubicacionGeoService.findById(sucursal.getUbicacion().getId_ubicacion());
            if (ubicacion == null) {
                return ResponseEntity.badRequest().body("La ubicación especificada no existe");
            }
            sucursal.setUbicacion(ubicacion);
            Sucursal savedSucursal = sucursalService.saveSucursal(sucursal);
            return ResponseEntity.ok(savedSucursal);
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.badRequest().body("Error de integridad de datos: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al crear la sucursal: " + e.getMessage());
        }
    }

    @PutMapping("/submit/{id}")
    public ResponseEntity<?> updateSucursal(@PathVariable int id, @RequestBody Sucursal sucursalDetails) {
        try {
            // Primero, verificamos si la sucursal existe
            Optional<Sucursal> optionalSucursal = sucursalService.getSucursalById(id);
            if (!optionalSucursal.isPresent()) {
                return ResponseEntity.notFound().build();
            }
            
            Sucursal sucursalExistente = optionalSucursal.get();

            // Verificamos si la nueva ubicación existe
            UbicacionGeo nuevaUbicacion = ubicacionGeoService.findById(sucursalDetails.getUbicacion().getId_ubicacion());
            if (nuevaUbicacion == null) {
                return ResponseEntity.badRequest().body("La ubicación especificada no existe");
            }

            // Actualizamos los campos de la sucursal existente
            sucursalExistente.setNombreSucursal(sucursalDetails.getNombreSucursal());
            sucursalExistente.setDireccion(sucursalDetails.getDireccion());
            sucursalExistente.setTelefono(sucursalDetails.getTelefono());
            sucursalExistente.setUbicacion(nuevaUbicacion);

            // Guardamos los cambios
            Sucursal sucursalActualizada = sucursalService.saveSucursal(sucursalExistente);
            
            return ResponseEntity.ok(sucursalActualizada);
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.badRequest().body("Error de integridad de datos: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                .body("Error al actualizar la sucursal: " + e.getMessage());
        }
    }

    @DeleteMapping("/submit/{id}")
    public ResponseEntity<Void> deleteSucursal(@PathVariable int id) {
        sucursalService.deleteSucursal(id);
        return ResponseEntity.noContent().build();
    }
}