import React from 'react'
import './Styles/FiltroPortada.css'

const FiltroPortada = () => {
    return (
        <div className="generalFiltroPortada">
            <label htmlFor="">Filtro Por Tipos</label>
            <select name="" id="" className="TamañoFilt">
                <option value="" className="option">
                    Fuego
                </option>
                <option value="" className="option">
                    Dragon
                </option>
                <option value="" className="option">
                    Agua
                </option>
                <option value="" className="option">
                    Tierra
                </option>
            </select>
        </div>
    )
}

export default FiltroPortada
