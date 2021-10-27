import React, {useState, useEffect} from 'react'
import NavbarGeneral from '../../Components/NavbarGeneral'
import '../CSS/PaginasTipo/PaginaFuego.css'

import Logo from '../../Images/logo.jpg'
import BadgePrincipal from '../../Components/BadgePrincipal'
import FiltroTipos from '../../Components/FiltroTipos'

const ApiUrl = 'http://127.0.0.1:8000/api/tierra/'


const PaginaTierra = () => {

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
                            />
                        })}
                    </div> 
                    
                </div>
            </div>
        </div>
    )
}

export default PaginaTierra