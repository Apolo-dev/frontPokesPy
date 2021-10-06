import React, {useEffect, useState} from 'react'
import CuerpoCatalogo from '../Components/CuerpoCatalogo'
import NavbarGeneral from '../Components/NavbarGeneral'
import './CSS/PaginaCatalogo.css'
import BuscadorCatalogo from '../Components/BuscadorCatalogo'
import BotonFiltros from '../Components/BotonFiltros'


const PaginaCatalogo = () => {

    const [poke, setPoke] = useState([])

    const [lista, setLista] = useState(false)

    

    // hago el fetch general 

    const APIURL = 'http://127.0.0.1:8000/api/pokemons/'

    const getPokemon = async ()=>
    {
        try
        {
            const res = await fetch(APIURL)
            const data = await res.json()
            const {pokemons} = data
            console.log(pokemons);
            setPoke(pokemons)
        }catch(error)
        {
            console.log(error);
        }
    }

    useEffect(()=>
    {
        getPokemon()
    }, [])


    const handleClick = ()=>
    {
        setLista(!lista)
    }




    const fuego = poke.filter((element)=>
    {
        return element.pokemon_type === 'Fuego'
    })

    const dragon = poke.filter((element)=>
    {
        return element.pokemon_type === 'Dragon'
    })

    const tierra = poke.filter((element)=>
    {
        return element.pokemon_type === 'Tierra'
    })

    const handleClickLista = (e)=>
    {
        //console.log(e.currentTarget.dataset.valor);
        if(e.currentTarget.dataset.valor === 'Fuego')
        {
            setPoke(fuego)
            setLista(!lista)
        }
        else if(e.currentTarget.dataset.valor === 'Dragon')
        {
            setPoke(dragon)
            setLista(!lista)
        }
        else if(e.currentTarget.dataset.valor === 'Tierra')
        {
            setPoke(tierra)
            setLista(!lista)
        }
        else
        {
            console.log('otra vola');
        }
    }


    
    return (
        <div className="gridCtaalogo">
            <div>
                <NavbarGeneral />
            </div>
            <div>
                <div className="filtroCtaal">
                    <ul>
                        <div>
                            <BuscadorCatalogo />
                        </div>
                        <div>
                            <BotonFiltros
                            pokemon = {poke}
                            handleClickLista={handleClickLista}
                            handleClick={handleClick}
                            lista = {lista}
                            
                            />
                        </div>        
                    </ul>
                </div>
            <div className="gridSeparaTitulo">
                <div className="tamañoTitulo">
                    <div>Pokemones de Fuego</div>
                </div>
                <div className="separarGrid">
                    {poke.map((element)=>
                        (
                            <div className="cuaerpoEstatico" key={element.id}>
                                <CuerpoCatalogo
                                pokemon = {element}
                                />
                            </div>
                        ))}
                </div>
            </div>
            </div>
        </div>
    )
}

export default PaginaCatalogo
