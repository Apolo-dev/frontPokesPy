import React from 'react'
import './Styles/NavbarInicio.css'

const NavbarInicio = () => {
    return (
        <div className="contenedornav">
            <ul>
                <li>
                    <a href="/login" >Login</a>
                </li>
                <li>
                    <a href="/registro">Registro</a>
                </li>
            </ul>
        </div>
    )
}

export default NavbarInicio
