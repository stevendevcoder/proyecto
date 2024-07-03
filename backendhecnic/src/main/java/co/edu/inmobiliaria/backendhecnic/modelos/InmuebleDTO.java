package co.edu.inmobiliaria.backendhecnic.modelos;

import java.math.BigDecimal;
import java.util.List;

public class InmuebleDTO {
    private Long idInmueble;
    private String descripcion;
    private BigDecimal precio;
    private String tipo;
    private String estado;
    private Long clienteId;
    private Long ciudadId;
    private int habitaciones;
    private int estrato;
    private String direccion;
    private String imagen;
    private List<AvaluoDTO> avaluos;
    
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
    public String getTipo() {
        return tipo;
    }
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
    public String getEstado() {
        return estado;
    }
    public void setEstado(String estado) {
        this.estado = estado;
    }
    public Long getClienteId() {
        return clienteId;
    }
    public void setClienteId(Long clienteId) {
        this.clienteId = clienteId;
    }
    public Long getCiudadId() {
        return ciudadId;
    }
    public void setCiudadId(Long ciudadId) {
        this.ciudadId = ciudadId;
    }
    public int getHabitaciones() {
        return habitaciones;
    }
    public void setHabitaciones(int habitaciones) {
        this.habitaciones = habitaciones;
    }
    public int getEstrato() {
        return estrato;
    }
    public void setEstrato(int estrato) {
        this.estrato = estrato;
    }
    public String getDireccion() {
        return direccion;
    }
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
    public String getImagen() {
        return imagen;
    }
    public void setImagen(String imagen) {
        this.imagen = imagen;
    }
    public List<AvaluoDTO> getAvaluos() {
        return avaluos;
    }
    public void setAvaluos(List<AvaluoDTO> avaluos) {
        this.avaluos = avaluos;
    }
}
