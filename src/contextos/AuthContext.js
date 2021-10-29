import React, { useContext, useState, useEffect } from "react";

const authContext = React.createContext()

// crear hook para acceder al contexto

const useAuth = () =>
{
    return useContext(authContext)
}

const AuthProvider = ({children}) => {

    const [usuario, setUsuario] = useState()

    useEffect(()=>
    {
        return console.log('voy a ver si esta logeado');
    }, [])


    return (
        <authContext.Provider value={{usuario: true}}>
            {children}
        </authContext.Provider>
    )
}

export {AuthProvider, authContext, useAuth}
