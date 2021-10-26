import React from 'react'
import './Styles/FormLogin.css'

const FormLogin = ({username, password, handleChange, handleSubmit}) => {
    return (
        <div className="generalFormLogin">
            <div className="tituloFormLogin">
                <h1>Iniciar Sesion</h1>
            </div>
            <form className="clasFormLogin" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <button className="botonLogin">
                        <h1>Ingresar</h1>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormLogin
