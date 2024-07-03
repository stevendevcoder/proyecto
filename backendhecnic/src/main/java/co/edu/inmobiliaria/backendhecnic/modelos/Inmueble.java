/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.edu.inmobiliaria.backendhecnic.modelos;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;

@Entity
@Table(name = "inmuebles")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Inmueble {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_inmueble")
    private Long idInmueble;

    @Column(columnDefinition = "TEXT")
    private String descripcion;

    private BigDecimal precio;

    @Enumerated(EnumType.STRING)
    private TipoNegocio negocio;

    @Enumerated(EnumType.STRING)
    private TipoInmueble tipo;

    @Enumerated(EnumType.STRING)
    private EstadoInmueble estado;

    @ManyToOne
    @JoinColumn(name = "id_cliente")
    private Persona cliente;

    @ManyToOne
    @JoinColumn(name = "id_ciudad")
    private UbicacionGeo ciudad;

    private Integer habitaciones;

    private Integer estrato;

    private String direccion;

    @Lob
    @Column(columnDefinition = "MEDIUMBLOB")
    private String imagen;
    
    // Getters y setters
    
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
    public String getDireccion() {
        return direccion;
    }

    public Long getIdInmueble() {
        return idInmueble;
    }

    public void setIdInmueble(Long idInmueble) {
        this.idInmueble = idInmueble;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public BigDecimal getPrecio() {
        return precio;
    }

    public void setPrecio(BigDecimal precio) {
        this.precio = precio;
    }

    public TipoInmueble getTipo() {
        return tipo;
    }

    public void setTipo(TipoInmueble tipo) {
        this.tipo = tipo;
    }

    public EstadoInmueble getEstado() {
        return estado;
    }

    public void setEstado(EstadoInmueble estado) {
        this.estado = estado;
    }

    public Persona getCliente() {
        return cliente;
    }

    public void setCliente(Persona cliente) {
        this.cliente = cliente;
    }

    public UbicacionGeo getCiudad() {
        return ciudad;
    }

    public void setCiudad(UbicacionGeo ciudad) {
        this.ciudad = ciudad;
    }

    public Integer getHabitaciones() {
        return habitaciones;
    }

    public void setHabitaciones(Integer habitaciones) {
        this.habitaciones = habitaciones;
    }

    public Integer getEstrato() {
        return estrato;
    }

    public void setEstrato(Integer estrato) {
        this.estrato = estrato;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public TipoNegocio getNegocio() {
        return negocio;
    }
    public void setNegocio(TipoNegocio negocio) {
        this.negocio = negocio;
    }

    public enum TipoInmueble {
        Casa, Apartamento, Oficina
    }

    public enum EstadoInmueble {
        Revision, Disponible, Vendido, Arrendado
    }

    public enum TipoNegocio {
        Arriendo, Venta
    }
}
