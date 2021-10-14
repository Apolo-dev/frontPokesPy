import React from 'react'
import NavbarGeneral from '../../Components/NavbarGeneral'
import '../CSS/PaginasTipo/PaginaFuego.css'

import FiltroPortada from '../../Components/FiltroPortada'
import Logo from '../../Images/logo.jpg'


const PaginaVolador = () => {




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
                        <FiltroPortada />
                    </div>
                </div>
                <div>
                    <div className="gridBadges">
                        olisss
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PaginaVolador