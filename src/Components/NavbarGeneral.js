import React from 'react'
import './Styles/NavbarGeneral.css'

import { Link } from 'react-router-dom'

const NavbarGeneral = () => {
    return (
        <div className="naviigenerall">
            <ul>
                <li>
                    <Link to="/portada">Portada</Link>
                </li>
                <li>
                    <Link to="/catalogo">Catalogo</Link>
                </li>
                <li>
                    <Link to="/equipos">Mi Equipo</Link>
                </li>
                <li>
                    <Link to="/">Cerrar Sesion</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavbarGeneral
