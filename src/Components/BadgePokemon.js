import React from 'react'
import './Styles/BadgePokemon.css'

const BadgePokemon = ({pokemon}) => {
    return (
        <div className="badgePokemon">
            <div>
                {pokemon.nombre}
                {pokemon.tipo}
            </div>
        </div>
    )
}

export default BadgePokemon
