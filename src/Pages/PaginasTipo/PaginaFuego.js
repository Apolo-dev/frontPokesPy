import React from 'react'
import NavbarGeneral from '../../Components/NavbarGeneral'
import '../CSS/PaginasTipo/PaginaFuego.css'

import FiltroPortada from '../../Components/FiltroPortada'
import Logo from '../../Images/logo.jpg'
import BadgePokemon from '../../Components/BadgePokemon'

const PaginaFuego = () => {

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
                        <FiltroPortada />
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

export default PaginaFuego
