import React, {useEffect, useState} from 'react'
import NavbarGeneral from '../../Components/NavbarGeneral'
import '../CSS/PaginasTipo/PaginaFuego.css'

import Logo from '../../Images/logo.jpg'
import BadgePokemon from '../../Components/BadgePokemon'
import FiltroTipos from '../../Components/FiltroTipos'
import BadgeAtaques from '../../Components/BadgeAtaques'

const PaginaDragon = () => {

    const [pokemonDragon, setPokemonDragon] = useState([])
    const [ataque, setAtaque] = useState([])

    const ApiURL = 'http://127.0.0.1:8000/api/pokemons/dragon/'
    const getPokemon = async ()=>
    {
        try
        {
            const res = await fetch(ApiURL)
            const data = await res.json()
            const {pokemonDragon} = data
            const {ataques} = data
            const ataquesFinal = ataques.map((element)=>
            {
                return element.at
            })
            //console.log(pokemonDragon);
            //console.log(ataques);
            //console.log(ataques);
            setPokemonDragon(pokemonDragon)
            setAtaque(ataquesFinal)
        }catch(error)
        {
            console.log(error);
        }
    }

    useEffect(()=>
    {
        getPokemon()
    }, [])

    const listaNormal = [
        {id: 1, nombre: 'chari', tipo:'fuego'},
        {id: 2, nombre: 'lugi', tipo:'agua'},
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
                        {ataque.map((element)=>
                        {
                            return <div key={element.id} className="separaBadges">
                                <BadgePokemon
                                pokemon = {listaNormal}
                                ataque={element}
                                
                                /> 
                            </div>
                        })}
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default PaginaDragon
