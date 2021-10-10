import React from 'react'
import './Styles/BadgePokemon.css'

import Altaria from '../Images/Altaria.jpg'

const BadgePokemon = ({pokemon, ataque}) => {

    return (
        <div className="badgePokemon">
            <div>
                <div className="imgBatch">
                    <img src={Altaria} alt="altaria" />
                </div>
                <div className="nombreBatch">
                    <h2>{pokemon.name_pokemon}</h2>
                </div>
                <div>
                    <strong>Tipo:</strong> {pokemon.tipe_pokemon}
                </div>
            </div>
            
            <div className="slectBadgeAtaques">
                <strong>Ataques: </strong> 
                <select name="" id="">
                    {ataque.map((element)=>
                    {
                        return <option value="" key={element.id}>{element.nombre}</option>
                    })}

                </select>
            </div>
            <div className="botonBadgee">
                <button>
                    Elegir
                </button>
            </div>
        </div>
    )
}

export default BadgePokemon
