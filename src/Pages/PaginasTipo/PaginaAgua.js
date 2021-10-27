import React, {useState, useEffect} from 'react'
import NavbarGeneral from '../../Components/NavbarGeneral'
import '../CSS/PaginasTipo/PaginaFuego.css'

import FiltroTipos from '../../Components/FiltroTipos'
import Logo from '../../Images/logo.jpg'
import BadgePrincipal from '../../Components/BadgePrincipal'
import ModalPortada from '../../Components/ModalPortada'

const ApiUrl = 'http://127.0.0.1:8000/api/agua/'


const PaginaAgua = () => {

    const [pokemon, setPokemon] = useState([])


    // para manejar la modal
    const [modal, setModal] = useState(false)


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
        setModal(!modal)
    }

    const handleClickModal = ()=>
    {
        setModal(!modal)
    }

    const handleClickEliminar = ()=>
    {
        setModal(!modal)
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
                {modal &&
                    <>
                    <ModalPortada
                        handleClickModal = {handleClickModal}
                        handleClickEliminar={handleClickEliminar} />
                    </>
                }
                
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

export default PaginaAgua