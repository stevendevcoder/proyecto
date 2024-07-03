package co.edu.inmobiliaria.backendhecnic.modelos;

import java.sql.Date;

import jakarta.persistence.*;

@Entity
@Table(name = "citas")
public class Cita {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cita")
    private Long idCita;

    @Enumerated(EnumType.STRING)
    private MotivoCita motivo;

    @Temporal(TemporalType.DATE)
    private Date fecha;

    private String telefono;
    private String correo;


    // Getters y setters

    public Long getIdCita() {
        return idCita;
    }

    public void setIdCita(Long idCita) {
        this.idCita = idCita;
    }

    public MotivoCita getMotivo() {
        return motivo;
    }

    public void setMotivo(MotivoCita motivo) {
        this.motivo = motivo;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public enum MotivoCita {
        Vender, ArrendarPropietario, Comprar, Arrendar
    }

}
