import React from 'react'
import NavbarGeneral from '../../Components/NavbarGeneral'
import '../CSS/PaginasTipo/PaginaFuego.css'

import Logo from '../../Images/logo.jpg'
import BadgePokemon from '../../Components/BadgePokemon'
import FiltroTipos from '../../Components/FiltroTipos'

const PaginaHielo = () => {

    const pokemon = [
        {
            nombre: 'Charizard',
            tipo: 'Fuego'
        },
        {
            nombre: 'Entei',
            tipo: 'Fuego'
        },
        {
            nombre: 'Lugia',
            tipo: 'Agua'
        },

    ]



    return (
        <div className="gridFuego">
            <div>
                <NavbarGeneral />
            </div>
            <div className="separaariCuerpo">
                <div className="GridseparaTitPortada">
                    <div className="tamaLogoPortada">
                        
                    </div>
                    <div className="tamñoTii">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="estilodFiltroPortada">
                        <FiltroTipos />
                    </div>
                </div>
                <div>
                    <div className="gridBadges">
                        {pokemon.map((element)=>
                        {
                            return <div>
                                <BadgePokemon
                                pokemon = {element}
                                
                                />
                            </div>
                        })}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PaginaHielo
