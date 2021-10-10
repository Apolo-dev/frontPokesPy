import React, {useEffect} from 'react'
import NavbarGeneral from '../../Components/NavbarGeneral'
import '../CSS/PaginasTipo/PaginaFuego.css'

import Logo from '../../Images/logo.jpg'
import BadgePokemon from '../../Components/BadgePokemon'
import FiltroTipos from '../../Components/FiltroTipos'

const PaginaFuego = () => {

    const ApiURL = 'http://127.0.0.1:8000/api/pokemons/fuego/'
    const getPokemon = async ()=>
    {
        try
        {
            const res = await fetch(ApiURL)
            const data = await res.json()
            const {pokemonFuego} = data
            console.log(pokemonFuego);
        }catch(error)
        {
            console.log(error);
        }
    }

    useEffect(()=>
    {
        getPokemon()
    }, [])

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
                            return <div key={element.id}>
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
