package co.edu.inmobiliaria.backendhecnic.modelos;

import java.math.BigDecimal;
import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;


@Entity
@Table(name = "avaluos")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Avaluo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_avaluo")
    private Long idAvaluo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_inmueble", referencedColumnName = "id_inmueble")
    private Inmueble inmueble;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_empleado")
    private Persona empleado;

    @Column(name = "fechaAvaluo")
    private Date fechaAvaluo;

    @Column(name = "valorAvaluo", precision = 14, scale = 2)
    private BigDecimal valorAvaluo;

    @Column(name = "descripcion", columnDefinition = "TEXT")
    private String descripcion;

    // Getters and setters
    public Long getIdAvaluo() {
        return idAvaluo;
    }

    public void setIdAvaluo(Long idAvaluo) {
        this.idAvaluo = idAvaluo;
    }

    public Inmueble getInmueble() {
        return inmueble;
    }

    public void setInmueble(Inmueble inmueble) {
        this.inmueble = inmueble;
    }

    public Persona getEmpleado() {
        return empleado;
    }

    public void setEmpleado(Persona empleado) {
        this.empleado = empleado;
    }

    public Date getFechaAvaluo() {
        return fechaAvaluo;
    }

    public void setFechaAvaluo(Date fechaAvaluo) {
        this.fechaAvaluo = fechaAvaluo;
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
