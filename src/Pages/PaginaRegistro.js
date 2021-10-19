import React, {useState} from 'react'
import FormRegistro from '../Components/FormRegistro'
import './CSS/PaginaRegistro.css'

import imagenn from '../Images/registro.jpg'

const PaginaRegistro = () => {


    const [nameUser, setNameUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const handleChange = (e)=>
    {
        if(e.target.name === 'nameUser')
        {
            setNameUser(e.target.value)
        }
        else if(e.target.name === 'email')
        {
            setEmail(e.target.value)
        }
        else if(e.target.name === 'password')
        {
            setPassword(e.target.value)
        }
        else if(e.target.name === 'password2')
        {
            setPassword2(e.target.value)
        }
        else
        {
            console.log('mala vola :(');
        }
    }

    const handleSubmit = (e)=>
    {
        e.preventDefault()
        
        

        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
        if ( !expresionRegular.test(email) )
        {
            alert('No es un email valido')
            return
        }

        if(email === '' || password === '' || password2 === '')
        {
            alert('Debes rellenar todos los campos')
            return
        }

        if(password.length<6)
        {
            alert('La contraseña debe tener minimo 6 caracteres')
            return
        }

        if(password !== password2)
        {
            alert('Las contraseñas no coinciden')
            return
        }

        console.log(nameUser, email, password, password2);




        setNameUser('')
        setEmail('')
        setPassword('')
        setPassword2('')
    }


    return (
        <div className="gridRegis">
            <div>
                
            </div>
            <div className="contenedorTituloyTexto">
                <div className="tituloPrra">
                    Liga Pokemon
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea similique odit fuga ullam cum, optio necessitatibus veritatis culpa at est maiores quidem aliquid aperiam id. Nulla dignissimos quod  </p>
                <img src={imagenn} alt="imagenn" />
            </div>
            <div className="cuerpoFormm">
                <FormRegistro
                nameUser = {nameUser}
                email = {email}
                password = {password}
                password2 = {password2}
                handleChange={handleChange}
                handleSubmit = {handleSubmit}
                
                />
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default PaginaRegistro
