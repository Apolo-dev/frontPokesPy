import React, {useState} from 'react'
import FormLogin from '../Components/FormLogin'
import './CSS/PaginaLogin.css'

const PaginaLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleChange = (e)=>
    {
        if (e.target.name === 'email')
        {
            setEmail(e.target.value)
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

    const handleSubmit = (e)=>
    {
        e.preventDefault()
        console.log(email, password);
    }

    return (
        <div className="gridLogin">
            <div>
                
            </div>
            <div>
                <FormLogin
                email = {email}
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
