import React from 'react'
import './Styles/FiltroPortada.css'

import { Link } from 'react-router-dom'
import logoAbajo from '../Images/logoAbajo.png'

const FiltroPortada = ({filtro, handleClickBoton}) => {
    

    return (
        <div className="generalFiltroPortada">
            
            <div className="gridcajaFiltroPr">
                <div className="estilosCaja" onClick={handleClickBoton}>
                    <h2>Principal</h2>
                </div>
                <div className="tamañologoabajo" >
                    <img src={logoAbajo} alt="logoabajo" />
                </div>
            </div>
            <div >
            {
                filtro &&
                    <div className="absolutLista">
                        <ul>
                            <li>
                                <Link to="portada/agua">Agua</Link>
                            </li>
                            <li>
                                <Link to="portada/dragon">Dragon</Link>
                            </li>
                            <li>
                                <Link to="portada/electrico">Electrico</Link>
                            </li>
                            <li>
                                <Link to="portada/fantasma">Fantasma</Link>
                            </li>
                            <li>
                                <Link to="portada/fuego">Fuego</Link>
                            </li>
                            <li>
                                <Link to="portada/hielo">Hielo</Link>
                            </li>
                            <li>
                                <Link to="portada/lucha">Lucha</Link>
                            </li>
                            
                            <li>
                                <Link to="portada/psiquico">Psiquico</Link>
                            </li>
                            
                            <li>
                                <Link to="portada/tierra">Tierra</Link>
                            </li>
                            <li>
                                <Link to="portada/volador">Volador</Link>
                            </li>
                            <li>
                                <Link to="portada/legendario">Legendario</Link>
                            </li>
                        </ul>
                    </div>


            }
            </div>
        </div>
    )
}

export default FiltroPortada
