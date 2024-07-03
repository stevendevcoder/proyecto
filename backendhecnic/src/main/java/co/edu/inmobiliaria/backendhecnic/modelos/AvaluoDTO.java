package co.edu.inmobiliaria.backendhecnic.modelos;

import java.math.BigDecimal;
import java.sql.Date;
import java.time.LocalDate;

public class AvaluoDTO {
    private Long idAvaluo;
    private Long idInmueble;
    private Long idEmpleado;
    private Date fechaAvaluo;
    private BigDecimal valorAvaluo;
    private String descripcion;

    // Constructor vacío
    public AvaluoDTO() {
    }

    // Getters y Setters

    public Long getIdAvaluo() {
        return idAvaluo;
    }

    public void setIdAvaluo(Long idAvaluo) {
        this.idAvaluo = idAvaluo;
    }

    public Long getIdInmueble() {
        return idInmueble;
    }

    public void setIdInmueble(Long idInmueble) {
        this.idInmueble = idInmueble;
    }

    public Long getIdEmpleado() {
        return idEmpleado;
    }

    public void setIdEmpleado(Long idEmpleado) {
        this.idEmpleado = idEmpleado;
    }

    public Date getFechaAvaluo() {
        return fechaAvaluo;
    }

    public void setFechaAvaluo(Date date) {
        this.fechaAvaluo = date;
    }

    public BigDecimal getValorAvaluo() {
        return valorAvaluo;
    }

    public void setValorAvaluo(BigDecimal valorAvaluo) {
        this.valorAvaluo = valorAvaluo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}

