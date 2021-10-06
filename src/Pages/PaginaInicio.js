import React from 'react'
import './CSS/PaginaInicio.css'

import logoPokemon from '../Images/logoPokemon.jpg'

import NavbarInicio from '../Components/NavbarInicio'

const PaginaINicio = () => {
    return (
        <div className="gridInicial">
            <div>
                <NavbarInicio />
            </div>
            <div className="imgportadaa">
                <img src={logoPokemon} alt="portada" />
            </div>
        </div>
    )
}

export default PaginaINicio
