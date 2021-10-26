import React, {useState} from 'react'
import FormLogin from '../Components/FormLogin'
import './CSS/PaginaLogin.css'

import { useHistory } from 'react-router'

const PaginaLogin = () => {

    const history = useHistory()

    const ApiUrl = 'http://127.0.0.1:8000/'

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async ()=>
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
                        "username": String(username).trim(),
                        "password": String(password).trim()
                    })
            })
    }


    const handleChange = (e)=>
    {
        if (e.target.name === 'username')
        {
            setUsername(e.target.value)
        }
        else if(e.target.name === 'password')
        {
            setPassword(e.target.value)
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
            res = await login()
            const data = await res.json()
            console.log(data.user.username);
            if(data.user.username === username)
            {
                history.push('portada')
            }
            else
            {
                alert('El usuario no tiene una cuenta')
            }
           
        }catch(error)
        {
            console.log(error);
        }
    }


    return (
        <div className="gridLogin">
            <div>
                
            </div>
            <div>
                <FormLogin
                username = {username}
                password = {password}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                
                />
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default PaginaLogin
