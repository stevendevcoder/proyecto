package co.edu.inmobiliaria.backendhecnic.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.inmobiliaria.backendhecnic.modelos.UbicacionGeo;
import co.edu.inmobiliaria.backendhecnic.repositorios.UbicacionGeoRepository;

@Service
public class UbicacionGeoService {

    @Autowired
    private UbicacionGeoRepository repository;


    public List<UbicacionGeo> findAll() {
        return repository.findAll();
    }


    public UbicacionGeo findById(int id) {
        return repository.findById(id).orElse(null);
    }


    public UbicacionGeo save(UbicacionGeo ubicacionGeo) {
        return repository.save(ubicacionGeo);
    }


    public void deleteById(int id) {
        repository.deleteById(id);
    }
}