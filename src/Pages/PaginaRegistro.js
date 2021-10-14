import React, {useState} from 'react'
import FormRegistro from '../Components/FormRegistro'
import './CSS/PaginaRegistro.css'

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
        console.log(nameUser, email, password, password2);
    }


    return (
        <div className="gridRegis">
            <div>
                
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
