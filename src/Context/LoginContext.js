import { createContext, useState } from "react";



export const LoginContext = createContext()

    const usuarios = [
        {
            email: 'hola@gmail.com',
            password: 'hola'
        },
        {
            email: 'chau@gmail.com',
            password: 'chau'
        },
        {
            email: 'ciao@gmail.com',
            password: 'ciao'
        },
    ]


export const LoginProvider = ({children}) => {

    const [user, setUser] = useState({
        user: '',
        logged: false
    })

    return (
        <LoginContext.Provider>
            {children}
        </LoginContext.Provider>
    )
}