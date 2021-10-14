import React from 'react'
import NavbarGeneral from '../../Components/NavbarGeneral'
import '../CSS/PaginasTipo/PaginaFuego.css'

import Logo from '../../Images/logo.jpg'
import FiltroTipos from '../../Components/FiltroTipos'

const PaginaFuego = () => {





    return (
        <div className="gridFuego">
            <div>
                <NavbarGeneral />
            </div>
            <div className="separaariCuerpo">
                <div className="GridseparaTitPortada">
                    <div className="tamaLogoPortada">
                        
                    </div>
                    <div className="tamñoTii">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="estilodFiltroPortada">
                        <FiltroTipos />
                    </div>
                </div>
                <div>
                    <div className="gridBadges">
                        olis
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PaginaFuego
