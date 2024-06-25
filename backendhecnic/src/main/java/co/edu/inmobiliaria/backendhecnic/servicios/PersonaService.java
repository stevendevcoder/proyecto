/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.edu.inmobiliaria.backendhecnic.servicios;
/**
 *
 * @author uestudiantes
 */
import java.util.List;
import co.edu.inmobiliaria.backendhecnic.modelos.Persona;
/**
 *
 * @author nixod
 */
public interface PersonaService {
    List<Persona> listar();
    Persona listarId(int id);
    Persona add(Persona p);
    Persona edit(Persona p);
    Persona delete(int id);
}