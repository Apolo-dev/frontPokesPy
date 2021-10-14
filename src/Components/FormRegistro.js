import React from 'react'
import './Styles/FormRegistro.css'


const FormRegistro = ({nameUser, email, password, password2, handleChange, handleSubmit}) => {
    return (
        <div className="estiloGeneralFormRegistro">
            <div className="tituloForrr">
                <div className="espaciotitt">
                    <h1>Registrate</h1>
                </div>
            </div>
            <div className="cuerpoforrr">
                <form  className="formGennee" onSubmit={handleSubmit}>
                    <div className="inputformgenn">
                        <label htmlFor="" className="mejorarlaleib">Name User</label>
                        <input 
                            type="text" 
                            name="nameUser"
                            value={nameUser}
                            onChange={handleChange}
                        
                        />
                    </div>
                    <div className="inputformgenn">
                        <label htmlFor="" className="mejorarlaleib">Email</label>
                        <input 
                            type="email"
                            name="email"
                            value = {email}
                            onChange={handleChange}
                            />
                    </div>
                    <div className="inputformgenn">
                        <label htmlFor="" className="mejorarlaleib">Password</label>
                        <input 
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            />
                    </div>
                    <div className="inputformgenn">
                        <label htmlFor="" className="mejorarlaleib">Confirmar Password</label>
                        <input 
                            type="password"
                            name="password2"
                            value={password2}
                            onChange={handleChange}
                            />
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
