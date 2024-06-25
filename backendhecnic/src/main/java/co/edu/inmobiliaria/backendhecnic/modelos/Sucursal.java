
package co.edu.inmobiliaria.backendhecnic.modelos;

import jakarta.persistence.*;

@Entity
@Table(name = "sucursales")
public class Sucursal {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_sucursales")
    private int id_sucursales;
    


    @ManyToOne
    @JoinColumn(name = "id_ubicacion", referencedColumnName = "id_ubicacion")
    private int id_ubicacion;


    
    @Column(name = "nombreSucursal")
    private String nombreSucursal;
    
    @Column(name = "Direccion")
    private String direccion;
    
    @Column(name = "Telefono")
    private String telefono;
    
    // Getters and Setters

    public int getId_sucursales() {
        return id_sucursales;
    }

    public void setId_sucursales(int id_sucursales) {
        this.id_sucursales = id_sucursales;
    }

    public int getIdUbicacion() {
        return id_ubicacion;
    }

    public void setIdUbicacion(int id_ubicacion) {
        this.id_ubicacion = id_ubicacion;
    }
  
    public String getNombreSucursal() {
        return nombreSucursal;
    }

    public void setNombreSucursal(String nombreSucursal) {
        this.nombreSucursal = nombreSucursal;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
}
