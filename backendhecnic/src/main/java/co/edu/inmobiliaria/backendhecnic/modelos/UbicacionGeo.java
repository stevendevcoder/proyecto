package co.edu.inmobiliaria.backendhecnic.modelos;

import jakarta.persistence.*;

@Entity
@Table(name = "ubicacionesgeograficas")
public class UbicacionGeo { 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_ubicacion;

    @Column
    private String Pais;

    @Column
    private String Ciudad;

    @Column
    private String Departamento;

    // Getters and Setters
    public int getId_ubicacion() {
        return id_ubicacion;
    }

    public void setId_ubicacion(int id_ubicacion) {
        this.id_ubicacion = id_ubicacion;
    }

    public String getPais() {
        return Pais;
    }

    public void setPais(String pais) {
        Pais = pais;
    }

    public String getCiudad() {
        return Ciudad;
    }

    public void setCiudad(String ciudad) {
        Ciudad = ciudad;
    }

    public String getDepartamento() {
        return Departamento;
    }

    public void setDepartamento(String departamento) {
        Departamento = departamento;
    }
}
