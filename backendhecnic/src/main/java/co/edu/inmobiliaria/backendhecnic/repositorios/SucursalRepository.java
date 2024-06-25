package co.edu.inmobiliaria.backendhecnic.repositorios;

import co.edu.inmobiliaria.backendhecnic.modelos.Sucursal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SucursalRepository extends JpaRepository<Sucursal, Integer> {
}
