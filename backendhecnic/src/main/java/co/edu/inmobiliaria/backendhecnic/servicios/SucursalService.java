package co.edu.inmobiliaria.backendhecnic.servicios;

import co.edu.inmobiliaria.backendhecnic.modelos.Sucursal;
import co.edu.inmobiliaria.backendhecnic.repositorios.SucursalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SucursalService {

    @Autowired
    private SucursalRepository sucursalRepository;

    public List<Sucursal> getAllSucursales() {
        return sucursalRepository.findAll();
    }

    public Optional<Sucursal> getSucursalById(int id) {
        return sucursalRepository.findById(id);
    }

    public Sucursal saveSucursal(Sucursal sucursal) {
        return sucursalRepository.save(sucursal);
    }

    public void deleteSucursal(int id) {
        sucursalRepository.deleteById(id);
    }
}