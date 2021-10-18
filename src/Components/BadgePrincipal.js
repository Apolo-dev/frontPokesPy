import React from 'react'
import './Styles/BadgePrincipal.css'


const BadgePrincipal = ({pokemones}) => {
    return (
        <div className="badgePrincipal">
            <div className="tamañoIMagenbadgeprinc">
                <img src={pokemones.image_pokemon} alt="aero" />
            </div>
            <div className="estilosNombre">
                {pokemones.name_pokemon}
            </div>
            <div className="estiloTipos">
                <strong>Tipo: </strong>{pokemones.type_pokemon}
            </div>
            <div className="jbhhj">
                <button className="botonBadgepRINCIPAL">
                    Elegir
                </button>
            </div>
        </div>
    )
}

export default BadgePrincipal
