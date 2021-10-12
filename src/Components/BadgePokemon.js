import React from 'react'
import './Styles/BadgePokemon.css'

import Altaria from '../Images/Altaria.jpg'
import BadgeAtaques from './BadgeAtaques'

const BadgePokemon = ({pokemon, ataque}) => {

    console.log(ataque);


    return (
        <div className="badgePokemon">
            <div>
                <div className="imgBatch">
                    <img src={Altaria} alt="altaria" />
                </div>
                <div className="nombreBatch">
                    <h2>charizar</h2>
                </div>
                <div>
                    <strong>Tipo:</strong> luguria
                </div>
            </div>
            
            <div className="slectBadgeAtaques">
                        <BadgeAtaques
                        ataque={ataque}
                />
                
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
