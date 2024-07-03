package co.edu.inmobiliaria.backendhecnic.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import co.edu.inmobiliaria.backendhecnic.modelos.Cita;

public interface CitaRepository extends JpaRepository<Cita, Long> {
}
