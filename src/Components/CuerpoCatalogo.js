import React, {useState} from 'react'
import './Styles/CuerpoCatalogo.css'

import Groudon from '../Images/groudon.jpg'

const CuerpoCatalogo = ({pokemon}) => {

    const [lista, setLista] = useState(false)

    const handleClickLista = ()=>
    {
        setLista(!lista)
    }

    const ListaAtaques = 
    [
        {id: 1, ataque: 'Lansallamas'},
        {id: 2, ataque: 'Ataque Ala'},
        {id: 3, ataque: 'Sofoco'},
        {id: 4, ataque: 'Cuchillada'},
    ]


    return (
        <div className="gridtarjeta">
            <div className="imagenPokesss">
                    <img src={Groudon} alt="poke" />
            </div>
            <ul className="detallitos">
                <li className="NombrePoke">{pokemon.name_pokemon}</li>
                <li><strong>Genero:</strong> {pokemon.tipe_pokemon}</li>
                <li><strong>Ataques:</strong><button className="botnListaAtaques" onClick={handleClickLista}>Lista de Ataques</button>
                    {lista &&
                        <div className="moverLiataAtaques">
                            {ListaAtaques.map((element)=>
                            {
                                return <div key={element.id}>
                                    {element.ataque}
                                </div>
                            })}
                        </div>
                    }
                    
                </li>
            </ul>
            <div>
                <button className="botonElegir">
                    Elegir
                </button>
            </div>
        </div>
    )
}

export default CuerpoCatalogo
