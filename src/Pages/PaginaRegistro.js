import React, {useState} from 'react'
import FormRegistro from '../Components/FormRegistro'
import './CSS/PaginaRegistro.css'

import { useHistory } from 'react-router'

import imagenn from '../Images/registro.jpg'

const PaginaRegistro = () => {

    const history = useHistory()

    const ApiUrl = 'http://127.0.0.1:8000/api/registrar/'

    const [nameUser, setNameUser] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    
    const registo = async ()=>
    {
        return await fetch(ApiUrl, 
            {
                method: 'POST',
                headers: 
                {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(
                    {
                        "name": String(nameUser).trim(),
                        "username": String(userName).trim(),
                        "email": String(email).trim(),
                        "password": String(password).trim()
                    })
            })
    }


    

    const handleChange = (e)=>
    {
        if(e.target.name === 'nameUser')
        {
            setNameUser(e.target.value)
        }
        else if(e.target.name === 'userName')
        {
            setUserName(e.target.value)
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

    const handleSubmit = async (e)=>
    {
        e.preventDefault()

        try
        {
            let res;
            res = await registo()
            const data = await res.json()
            console.log(data.user.username);
            
        }catch(error)
        {
            console.log(error);
        }
        
        

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

        setNameUser('')
        setUserName('')
        setEmail('')
        setPassword('')
        setPassword2('')
        history.push('portada')
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
                userName={userName}
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
