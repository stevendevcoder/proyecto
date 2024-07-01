package co.edu.inmobiliaria.backendhecnic.modelos;

import jakarta.persistence.*;

@Entity
@Table(name = "tipospersonas")
public class TipoPersona {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_tipopersona")
    private int idTipoPersona;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "tipo")
    private Tipo tipo;

    public int getIdTipoPersona() {
        return idTipoPersona;
    }

    public void setIdTipoPersona(int idTipoPersona) {
        this.idTipoPersona = idTipoPersona;
    }

    public Tipo getTipo() {
        return this.tipo;
    }

    public void setTipo(Tipo _tipo) {
        this.tipo = _tipo;
    }
/* 
    public Tipo getTypeEnum() {
        try {
            return Tipo.valueOf(this.tipo);
        } catch (IllegalArgumentException e) {
            return null;
        }
    }
      
    public void setTypeEnum(Tipo typeEnum) {
        if (typeEnum != null) {
            this.tipo = typeEnum.toString();
        }
    }*/
    
    public enum Tipo {
        Administrador,
        Empleado,
        Cliente
    }

    public TipoPersona orElseThrow(Object object) {
        throw new UnsupportedOperationException("Unimplemented method 'orElseThrow'");
    }
}
