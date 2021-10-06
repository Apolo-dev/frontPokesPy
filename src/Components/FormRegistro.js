import React from 'react'
import './Styles/FormRegistro.css'


const FormRegistro = () => {
    return (
        <div>
            <div className="tituloForrr">
                <div className="espaciotitt">
                    <h1>Registrate</h1>
                </div>
            </div>
            <div className="cuerpoforrr">
                <form action="" className="formGennee">
                    <div className="inputformgenn">
                        <label htmlFor="" className="mejorarlaleib">Name User</label>
                        <input type="text"  />
                    </div>
                    <div className="inputformgenn">
                        <label htmlFor="" className="mejorarlaleib">Email</label>
                        <input type="text" />
                    </div>
                    <div className="inputformgenn">
                        <label htmlFor="" className="mejorarlaleib">Password</label>
                        <input type="text" />
                    </div>
                    <div className="otravolaref">
                        <label htmlFor="">Ya tengo una cuenta</label>
                        <a href="/login">Ir al Login</a>
                    </div>
                    <div className="bottonnEnviar">
                        <button>
                            <h2>Enviar</h2>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormRegistro
