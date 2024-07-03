
package co.edu.inmobiliaria.backendhecnic.modelos;

import jakarta.persistence.*;

@Entity
@Table(name = "sucursales")
public class Sucursal {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_sucursales")
    private int id_sucursales;

    @Column(name = "nombreSucursal")
    private String nombreSucursal;
    
    @Column(name = "direccion")
    private String direccion;
    
    @Column(name = "telefono")
    private String telefono;
    
    @ManyToOne
    @JoinColumn(name = "id_ubicacion")
    private UbicacionGeo ubicacion;

    // Getters and Setters

    public int getId_sucursales() {
        return id_sucursales;
    }

    public void setId_sucursales(int id_sucursales) {
        this.id_sucursales = id_sucursales;
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

    public UbicacionGeo getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(UbicacionGeo ubicacion) {
        this.ubicacion = ubicacion;
    }
}
