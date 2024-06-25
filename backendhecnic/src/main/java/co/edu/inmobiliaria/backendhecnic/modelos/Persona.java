/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.inmobiliaria.backendhecnic.modelos;

import jakarta.persistence.*;

@Entity
@Table(name = "personas")
public class Persona {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_personas;
    
    @Column
    private String nombre;
    
    @Column
    private String telefono;
    @Column
    private String email;

    public int getId_personas() {
        return id_personas;
    }

    public void setId_personas(int id_personas) {
        this.id_personas = id_personas;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
   
}
