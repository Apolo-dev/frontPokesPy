import React from 'react'
import './Styles/FiltroPortada.css'

import { Link } from 'react-router-dom'

const FiltroPortada = ({filtro, handleClickBoton}) => {
    

    return (
        <div className="generalFiltroPortada">
            
            <div className="estilosCaja" onClick={handleClickBoton}>
                <h2>Principal</h2>
            </div>
            <div >
            {
                filtro &&
                    <div className="absolutLista">
                        <ul>
                            <li>
                                <Link to="portada/fuego">Fuego</Link>
                            </li>
                            <li>
                                <Link to="portada/dragon">Dragon</Link>
                            </li>
                            <li>
                                <Link to="portada/hielo">Hielo</Link>
                            </li>
                            <li>
                                <Link to="portada/tierra">Tierra</Link>
                            </li>
                        </ul>
                    </div>


            }
            </div>
        </div>
    )
}

export default FiltroPortada
