package co.edu.inmobiliaria.backendhecnic.modelos;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;

@Entity
@Table(name = "estudiosderiesgo")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class EstudioDeRiesgo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEstudio;

    @ManyToOne
    @JoinColumn(name = "id_inmueble", nullable = false)
    private Inmueble inmueble;

    @Enumerated(EnumType.STRING)
    @Column(name = "estado", nullable = false)
    private EstadoEstudio estado;

    @Column(name = "fecha_estudio", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date fechaEstudio;

    @Column(name="resultado_central", nullable = false)
    @Enumerated(EnumType.STRING)
    private Resultado resultadoCentral;

    @Enumerated(EnumType.STRING)
    @Column(name = "resultado_lista_clinton", nullable = false)
    private Resultado resultadoListaClinton;

    @Enumerated(EnumType.STRING)
    @Column(name = "certificado_libertad", nullable = false)
    private Resultado certificadoLibertad;



    public Long getIdEstudio() {
        return idEstudio;
    }

    public void setIdEstudio(Long idEstudio) {
        this.idEstudio = idEstudio;
    }

    public Inmueble getInmueble() {
        return inmueble;
    }

    public void setInmueble(Inmueble inmueble) {
        this.inmueble = inmueble;
    }

    public Date getFechaEstudio() {
        return fechaEstudio;
    }

    public void setFechaEstudio(Date fechaEstudio) {
        this.fechaEstudio = fechaEstudio;
    }

    public Resultado getResultadoCentral() {
        return resultadoCentral;
    }

    public void setResultadoCentral(Resultado resultadoCentral) {
        this.resultadoCentral = resultadoCentral;
    }

    public Resultado getResultadoListaClinton() {
        return resultadoListaClinton;
    }

    public void setResultadoListaClinton(Resultado resultadoListaClinton) {
        this.resultadoListaClinton = resultadoListaClinton;
    }

    public Resultado getCertificadoLibertad() {
        return certificadoLibertad;
    }

    public void setCertificadoLibertad(Resultado certificadoLibertad) {
        this.certificadoLibertad = certificadoLibertad;
    }

    public enum Resultado {
        Positivo, Negativo
    }

    public enum EstadoEstudio {
        Pendiente, Aceptado, Rechazado
    }

}
