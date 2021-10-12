import React from 'react'
import './Styles/SidebarBatalla.css'

import Lugia from '../Images/Lugia.jpg'
import Hitmonchan from '../Images/Hitmonchan.jpg'
import Mewtwo from '../Images/Mewtwo.jpg'
import Raikou from '../Images/Raikou.jpg'
import Entei from '../Images/Entei.jpg'
import Golem from '../Images/Golem.jpg'

const SidebarBatalla = () => {
    return (
        <div className="gridsidemini">
            <div>
                <div>
                    minimenu
                </div>
                <div>
                    boton cerrar
                </div>
            </div>
            <div className="gridseparacuerposide">
                <div className="formatoTituloSide">
                    Equipo Turbo
                </div>
                <div className="gridPokesBataalla">
                    <div className="gridseparrafotocuerpo">
                        <div className="tamImGENbATCH">
                            <img src={Lugia} alt="lugia" /> 
                        </div>
                        <div className="gridMiniSEPA"> 
                            <div>
                                charizard
                            </div>
                            <div>
                                fuego
                            </div>
                        </div>
                    </div>
                    <div className="gridseparrafotocuerpo">
                        <div className="tamImGENbATCH">
                            <img src={Hitmonchan} alt="Hitmonchan" />
                        </div>
                        <div className="gridMiniSEPA"> 
                            <div>
                                charizard
                            </div>
                            <div>
                                fuego
                            </div>
                        </div>
                    </div>
                    <div className="gridseparrafotocuerpo">
                        <div className="tamImGENbATCH">
                            <img src={Mewtwo} alt="Mewtwo" />
                        </div>
                        <div className="gridMiniSEPA"> 
                            <div>
                                charizard
                            </div>
                            <div>
                                fuego
                            </div>
                        </div>
                    </div>
                    <div className="gridseparrafotocuerpo">
                        <div className="tamImGENbATCH">
                            <img src={Raikou} alt="Raikou" />
                        </div>
                        <div className="gridMiniSEPA"> 
                            <div>
                                charizard
                            </div>
                            <div>
                                fuego
                            </div>
                        </div>
                    </div>
                    <div className="gridseparrafotocuerpo">
                        <div className="tamImGENbATCH">
                            <img src={Entei} alt="Entei" />
                        </div>
                        <div className="gridMiniSEPA"> 
                            <div>
                                charizard
                            </div>
                            <div>
                                fuego
                            </div>
                        </div>
                    </div>
                    <div className="gridseparrafotocuerpo">
                        <div className="tamImGENbATCH">
                            <img src={Golem} alt="Golem" />
                        </div>
                        <div className="gridMiniSEPA"> 
                            <div>
                                charizard
                            </div>
                            <div>
                                fuego
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarBatalla
