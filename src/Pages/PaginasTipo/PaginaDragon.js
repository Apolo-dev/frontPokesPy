import React, {useEffect, useState} from 'react'
import NavbarGeneral from '../../Components/NavbarGeneral'
import '../CSS/PaginasTipo/PaginaFuego.css'

import Logo from '../../Images/logo.jpg'
import FiltroTipos from '../../Components/FiltroTipos'
import BadgePrincipal from '../../Components/BadgePrincipal'

const ApiUrl = 'http://127.0.0.1:8000/api/dragon/'



const PaginaDragon = () => {

    const [pokemon, setPokemon] = useState([])

    const getPokemones = async ()=>
    {
        try
        {
            const res = await fetch(ApiUrl)
            const data = await res.json()
            setPokemon(data)
        }catch(error)
        {
            console.log(error);
        }
    }

    useEffect(()=>
    {
        return getPokemones()
    }, [])


    const handleClick = ()=>
    {
        console.log('voy a individualizarlo');
    }



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
                            return <BadgePrincipal
                                    pokemones = {element}
                                    handleClick = {handleClick}
                            />
                        })}
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default PaginaDragon
