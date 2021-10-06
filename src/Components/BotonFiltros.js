import React from 'react'
import './Styles/BotonFiltro.css'

const BotonFiltros = ({pokemon, handleClickLista, handleClick, lista}) => {

    

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
        <div className="clasBotoncat">
            <label htmlFor="">Filtro por Tipos</label>
            <button onClick={handleClick}>
                <h3>Tipos de Pokemon</h3>
            </button>
            {
                lista &&
                    <div className="absolutLista">
                        {Tipos.map((element)=>
                        {
                            return <div className="botonesListtaaa"
                            onClick = {handleClickLista}
                            key={element.id}
                            data-valor = {element.texto}
                            >

                                {element.texto}
                            </div>

                        })}
                    </div>


            }
            
        </div>
    )
}

export default BotonFiltros
