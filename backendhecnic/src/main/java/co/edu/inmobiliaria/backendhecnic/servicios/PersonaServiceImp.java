/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.inmobiliaria.backendhecnic.servicios;
import co.edu.inmobiliaria.backendhecnic.repositorios.PersonaRepository;
import co.edu.inmobiliaria.backendhecnic.repositorios.TipoPersonaRepository;
import jakarta.transaction.Transactional;
import co.edu.inmobiliaria.backendhecnic.modelos.Persona;
import co.edu.inmobiliaria.backendhecnic.modelos.TipoPersona;

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

    @Autowired
    private TipoPersonaRepository tipoPersonaRepository;
    
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
        TipoPersona tipoPersona = tipoPersonaRepository.save(p.getTipoPersona());
        p.setTipoPersona(tipoPersona);

        return repositorio.save(p);
    }

    @Override
    public Persona edit(Persona p) {
        TipoPersona tipoPersona = tipoPersonaRepository.save(p.getTipoPersona());
        p.setTipoPersona(tipoPersona);
        return repositorio.save(p);
    }

    @Override
    @Transactional
    public Persona delete(int id) {
        Persona p = repositorio.findById(id);
        if (p != null) {
            TipoPersona tipoPersona = p.getTipoPersona();
            repositorio.deleteById(id);
            
            if (tipoPersona != null) {
                long count = repositorio.countByTipoPersona(tipoPersona);
                if (count == 0) {
                    tipoPersonaRepository.delete(tipoPersona);
                }
            }
        }
        return p;
    }
    
}
