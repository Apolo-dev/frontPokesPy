import React, {useState} from 'react'
import './Styles/FiltroTipos.css'
import { Link } from 'react-router-dom'

const FiltroTipos = () => {


    const [lista, setLista] = useState(false)


    const handleClickLista = ()=>
    {
        setLista(!lista)
    }

    return (
        <div>
            <div className="cajaFiltroTipos" onClick={handleClickLista}>
                <h2>Tipos</h2>
            </div>
            {lista &&
                <div className="conteListaTipos">
                    <ul>
                        <li>
                            <Link to="fuego">Fuego</Link>
                        </li>
                        <li>
                            <Link to="dragon">Dragon</Link>
                        </li>
                        <li>
                            <Link to="psiquico">Psiquico</Link>
                        </li>
                        <li>
                            <Link to="hielo">Hielo</Link>
                        </li>
                        <li>
                            <Link to="tierra">Tierra</Link>
                        </li>
                        <li>
                            <Link to="electrico">Electrico</Link>
                        </li>
                        <li>
                            <Link to="lucha">Lucha</Link>
                        </li>
                        <li>
                            <Link to="agua">Agua</Link>
                        </li>
                        <li>
                            <Link to="fantasma">Fantasma</Link>
                        </li>
                        <li>
                            <Link to="volador">Volador</Link>
                        </li>
                    </ul>
            </div>
            
            
            }
            
        </div>
    )
}

export default FiltroTipos
