import React, {useEffect, useState} from 'react'
import NavbarGeneral from '../../Components/NavbarGeneral'
import '../CSS/PaginasTipo/PaginaFuego.css'

import Logo from '../../Images/logo.jpg'
import BadgePokemon from '../../Components/BadgePokemon'
import FiltroTipos from '../../Components/FiltroTipos'

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
            console.log(pokemonDragon);
            console.log(ataques);
            setPokemonDragon(pokemonDragon)
            setAtaque(ataques)
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
        {
            nombre: 'perro',
            tipo: 'buenaonado'
        },

    ]

    const listaAtaques = [
        {id: 1, nombre: 'lansallamas'},
        {id: 2, nombre: 'ataque Ala'},
        {id: 3, nombre: 'eco'},
        {id: 4, nombre: 'hidrobomba'},
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
                        {pokemonDragon.map((element)=>
                        {
                            return <div key={element.id} className="separaBadges">
                                <BadgePokemon
                                pokemon = {element}
                                ataque={listaAtaques}
                                
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
