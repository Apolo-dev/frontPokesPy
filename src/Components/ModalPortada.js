import React from 'react'
import './Styles/ModalPortada.css'

import golem from '../Images/Golem.jpg'

const ModalPortada = ({handleClickModal, handleClickEliminar}) => {

    const handleClickImagen = ()=>
    {
        console.log('eliminate puto');
    }


    return (
        <div className="contenedorModal">
            <div className="modall gridModal">
                <div className="estilosTextoModal">
                    Pokemones añadidos
                </div>
                <div className="gridFotosBoton">
                    <div>
                        <ul className="claseListaModal">
                            <li onClick={handleClickImagen}>
                                <img src={golem} alt="hjkhk"></img>
                            </li>
                            <li>
                                <img src={golem} alt="hjkhk"></img>
                            </li>
                            <li>
                                <img src={golem} alt="hjkhk"></img>
                            </li>
                            <li>
                                <img src={golem} alt="hjkhk"></img>
                            </li>
                            <li>
                                <img src={golem} alt="hjkhk"></img>
                            </li>
                            <li>
                                <img src={golem} alt="hjkhk"></img>
                            </li>
                        </ul>
                    </div>
                    <div className="gridcontenedorBotonModal">
                        <div className="estiloTextoMOdal">
                            <p>¿Quieres agregar a Golem a tu equipo?</p>
                        </div>
                        <div className="gridBotonesModal">
                            <div>
                                <button className="botonModal" onClick={handleClickModal}>
                                    Aceptar
                                </button>
                            </div>
                            <div>
                                <button className="BotonRechazarModal" onClick = {handleClickEliminar}>
                                    Eliminar
                                </button>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPortada
