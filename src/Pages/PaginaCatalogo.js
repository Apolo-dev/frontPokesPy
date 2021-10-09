import React, {useEffect, useState} from 'react'
import CuerpoCatalogo from '../Components/CuerpoCatalogo'
import NavbarGeneral from '../Components/NavbarGeneral'
import './CSS/PaginaCatalogo.css'
import BuscadorCatalogo from '../Components/BuscadorCatalogo'
import BotonFiltros from '../Components/BotonFiltros'
import CuerpoAtaques from '../Components/CuerpoAtaques'


const PaginaCatalogo = () => {

    const [poke, setPoke] = useState([])
    const [ataque, setAtaque] = useState([])

    const [lista, setLista] = useState(false)

    

    // hago el fetch general 

    const APIURL = 'http://127.0.0.1:8000/api/attacks/'

    const getPokemon = async ()=>
    {
        try
        {
            const res = await fetch(APIURL)
            const data = await res.json()
            const {pokemons} = data
            const {ataques} = data
            console.log(pokemons);
            console.log(ataques);
            setPoke(pokemons)
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


    const handleClick = ()=>
    {
        setLista(!lista)
    }




    const fuego = poke.filter((element)=>
    {
        return element.tipe_pokemon === 'Fuego'
    })

    const dragon = poke.filter((element)=>
    {
        return element.tipe_pokemon === 'Dragon'
    })

    const tierra = poke.filter((element)=>
    {
        return element.tipe_pokemon === 'Tierra'
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
