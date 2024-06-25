/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.inmobiliaria.backendhecnic.servicios;
import co.edu.inmobiliaria.backendhecnic.repositorios.PersonaRepository;
import co.edu.inmobiliaria.backendhecnic.modelos.Persona;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author nixod
 */@Service
public class PersonaServiceImp implements PersonaService{

    @Autowired
    private PersonaRepository repositorio;
    
    @Override
    public List<Persona> listar() {
        return repositorio.findAll();
    }

    @Override
    public Persona listarId(int id) {
        return repositorio.findById(id);
    }

    @Override
    public Persona add(Persona p) {
        return repositorio.save(p);
    }

    @Override
    public Persona edit(Persona p) {
        return repositorio.save(p);
    }

    @Override
    public Persona delete(int id) {
        Persona p = repositorio.findById(id);
        if (p!=null){
            repositorio.deleteById(id);
        }
        return p;
    }
    
}
