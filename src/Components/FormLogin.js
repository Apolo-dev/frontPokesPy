import React from 'react'
import './Styles/FormLogin.css'

const FormLogin = ({email, password, handleChange, handleSubmit}) => {
    return (
        <div className="generalFormLogin">
            <div className="tituloFormLogin">
                <h1>Iniciar Sesion</h1>
            </div>
            <form className="clasFormLogin" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
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
