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
            const resu = ataques.map((element)=>
            {
                return element.ataqueAltaria
            })
        
            //console.log(pokemonDragon);
            //console.log(ataques);
            console.log(resu);
            setPokemonDragon(pokemonDragon)
            setAtaque(resu)
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
        {id: 1, nombre: 'pico'},
        {id: 2, nombre: 'nada'},
        {id: 3, nombre: 'poto'},
        {id: 4, nombre: 'pussy'},
    ]
        
    



    const ataquesPoke = [
        [
            {id: 1, nombre: 'lansallamas'},
            {id: 2, nombre: 'ataque Ala'},
            {id: 3, nombre: 'llamarada'},
            {id: 4, nombre: 'ascuas'},
        ],
    
        [
            {id: 1, nombre: 'hidrobomba'},
            {id: 2, nombre: 'surf'},
            {id: 3, nombre: 'megaRio'},
            {id: 4, nombre: 'cascada'},
        ],
    
        [
            {id:1, nombre: 'rayo'},
            {id: 2, nombre: 'sobrecarga'},
            {id: 3, nombre: 'eco'},
            {id: 4, nombre: 'gigavoltio'},
        ]

    ]

    const mapeo = ataquesPoke.map((element)=>
    {
        return element
    })

    useEffect(()=>
    {
        //console.log(ataquesPoke);
        console.log(listaNormal);
    })


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
                                ataque={listaNormal}
                                
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
