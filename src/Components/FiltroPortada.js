import React from 'react'
import './Styles/FiltroPortada.css'

//import { Link } from 'react-router-dom'

const FiltroPortada = ({filtro, handleClick, handleClickBoton}) => {

    const Tipos = 
    [
        {id:1, texto:'Fuego'},
        {id:2, texto:'Dragon'},
        {id:3, texto:'Agua'},
        {id:4, texto:'Electrico'},
        {id:5, texto:'Tierra'},
        {id:6, texto:'Psiquico'},
        {id:7, texto:'Lucha'},
        {id:8, texto:'Hielo'},
        {id:9, texto:'Volador'},
        {id:10, texto:'Legendario'},
    ]

    return (
        <div className="generalFiltroPortada">
            
            <div className="estilosCaja" onClick={handleClickBoton}>
                <h2>Principal</h2>
            </div>
            <div >
            {
                filtro &&
                    <div className="absolutLista">
                        {Tipos.map((element)=>
                        {
                            return <div className="botonesListtaaa"
                            onClick = {handleClick}
                            key={element.id}
                            data-valor = {element.texto}
                            >

                                {element.texto}
                            </div>

                        })}
                    </div>


            }
            </div>
        </div>
    )
}

export default FiltroPortada
