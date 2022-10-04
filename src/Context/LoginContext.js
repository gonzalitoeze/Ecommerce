import { createContext, useContext, useState } from "react";



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
        user: 'hola@gmail.com',
        logged: true,
        error: ''
    })

    const login = (values) => {
        const match = usuarios.find(user => user.email === values.email)

        if (match) {
            if (match.password === values.pass) {
                setUser({
                    user: match.email,
                    logged: true,
                    error: ''
                })
            } else {
                setUser({
                    user: '',
                    logged: false,
                    error: 'Wrong password'
                })
            }
        } else {
            setUser({
                user: '¿',
                logged: false,
                error: 'Error! Please check your email or password'
            })
        }
    }

    const logout = () => {
        setUser ({
            user:'',
            logged: false,
            error: ''
        })
    }


    return (
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}
export const useLoginContext = () => {
    return useContext (LoginContext)
}