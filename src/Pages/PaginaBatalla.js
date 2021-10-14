import React, {useState} from 'react'
import BadgeBatalla from '../Components/BadgeBatalla'
import SidebarBatalla from '../Components/SidebarBatalla'
import './CSS/PaginaBatalla.css'

import Flecha from '../Images/iconoFlecha.png'

const PaginaBatalla = () => {

    // estadoIconoFlecha

    const [icono, setIcono] = useState(false)

    const handleClickFlecha = ()=>
    {
        setIcono(!icono)
    }


    return (
        <div className="gridBatalla">
            <div className="gridsideb">
                {icono &&
                    <div>
                        <SidebarBatalla />
                    </div>
                }
                
            </div>
            <div className="gridCuerpobatalla">
                <div className="TituloPaginaBatallas">
                    <div className="tamañoIconoFlecha">
                        <img src={Flecha} alt="flecha" onClick={handleClickFlecha}/>
                    </div>
                    <div>
                        <h2>Batalla lider Camila Agua/Hielo</h2>
                    </div>
                    
                </div>
                <div className="gridSeparaCampoBatalla">
                    <div className="gridSepararmensabatch1">
                        <div>
                            mensajes 
                        </div>
                        <div className="gridSeparabatchataques1">
                            <div>
                                <BadgeBatalla />
                            </div>
                            <div>
                                ataques poke 1
                            </div>
                        </div>
                    </div>
                    <div className="gridSorteo">
                        <div>
                            vacio
                        </div>
                        <div className="gridSeparaBotonMensaje">
                            <div>
                                mensaje
                            </div>
                            <div>
                                <div className="estilosboton">
                                    <h1>Sorteo</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            vacio
                        </div>
                    </div>
                    <div className="gridSepararmensabatch2">
                        <div className="gridSeparabatchataques2">
                            <div className="tamañoBatchBatalla">
                                <BadgeBatalla />
                            </div>
                            <div>
                                ataques poke mio
                            </div>
                        </div>
                        <div>
                            mensajes
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaginaBatalla
