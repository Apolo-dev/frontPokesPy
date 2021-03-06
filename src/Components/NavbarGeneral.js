import React from 'react'
import './Styles/NavbarGeneral.css'
import CerrarSesion from './CerrarSesion'

import { Link } from 'react-router-dom'

const NavbarGeneral = () => {
    return (
        <div className="naviigenerall">
            <ul>
                <li>
                    <Link to="/portada">Portada</Link>
                </li>
                <li>
                    <Link to="/equipos">Mi Equipo</Link>
                </li>
                <li>
                    <Link to="/batalla">Batalla</Link>
                </li>
                <li>
                    <CerrarSesion />
                </li>
            </ul>
        </div>
    )
}

export default NavbarGeneral
