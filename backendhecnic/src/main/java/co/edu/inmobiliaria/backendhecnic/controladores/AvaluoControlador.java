package co.edu.inmobiliaria.backendhecnic.controladores;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import co.edu.inmobiliaria.backendhecnic.modelos.Avaluo;
import co.edu.inmobiliaria.backendhecnic.modelos.AvaluoDTO;
import co.edu.inmobiliaria.backendhecnic.servicios.AvaluoService;

@RestController
@RequestMapping("/avaluos")
public class AvaluoControlador {

    @Autowired
    private AvaluoService avaluoService;

    @PostMapping("/submit")
    public ResponseEntity<Avaluo> guardarAvaluo(@RequestBody Avaluo avaluo) {
        Avaluo nuevoAvaluo = avaluoService.guardarAvaluo(avaluo);
        return new ResponseEntity<>(nuevoAvaluo, HttpStatus.CREATED);
    }

    @GetMapping("/submit/inmueble/{id}")
    public ResponseEntity<List<AvaluoDTO>> obtenerAvaluosPorInmueble(@PathVariable("id") Long id) {
        List<Avaluo> avaluos = avaluoService.obtenerAvaluosPorInmueble(id);
        List<AvaluoDTO> avaluosDTO = avaluos.stream().map(this::convertirAvaluoADTO).collect(Collectors.toList());
        return ResponseEntity.ok(avaluosDTO);
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


    @GetMapping("/submit/{id}")
    public ResponseEntity<Avaluo> obtenerAvaluoPorId(@PathVariable("id") Long id) {
        Avaluo avaluo = avaluoService.obtenerAvaluoPorId(id);
        if (avaluo != null) {
            return new ResponseEntity<>(avaluo, HttpStatus.OK);
        } else {
            System.out.println("Avaluo no encontrado");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    // Método para editar un Avaluo existente
    @PutMapping("/submit/{id}")
    public ResponseEntity<Avaluo> editarAvaluo(@PathVariable Long id, @RequestBody Avaluo detallesAvaluo) {
        Avaluo avaluoExistente = avaluoService.obtenerAvaluoPorId(id);
        
        if (avaluoExistente == null) {
            return ResponseEntity.notFound().build();
        }
    
        avaluoExistente.setDescripcion(detallesAvaluo.getDescripcion());
        avaluoExistente.setValorAvaluo(detallesAvaluo.getValorAvaluo());
        avaluoExistente.setFechaAvaluo(detallesAvaluo.getFechaAvaluo());
        avaluoExistente.setEmpleado(detallesAvaluo.getEmpleado());
        avaluoExistente.setInmueble(detallesAvaluo.getInmueble());

        Avaluo avaluoActualizado = avaluoService.edit(avaluoExistente);
        return ResponseEntity.ok(avaluoActualizado);
    }

    @DeleteMapping("/submit/{id}")
    public ResponseEntity<Void> eliminarAvaluo(@PathVariable("id") Long id) {
        avaluoService.eliminarAvaluo(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
