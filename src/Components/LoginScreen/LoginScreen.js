import { useContext, useState } from "react"
import { LoginContext } from "../../Context/LoginContext"



const LoginScreen = () => {

    const {login, user} = useContext(LoginContext)
    console.log(user)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePassChange = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login({
            email, pass
        })
    }

    return(
        <div className="container" style={{marginTop:"5%", marginBottom:"3%"}}>
            <form onClick={handleSubmit}>
                <input style={{marginBottom:"3%"}}
                    type={'text'}
                    className='form-control'
                    value={email}
                    onChange={handleEmailChange}
                    
                />
                <input
                    type={'password'}
                    className='form-control'
                    value={pass}
                    onChange={handlePassChange}
                />
                {user.error && <small className="alert">{user.error}</small>}


                <button className='btn btn-primary' type="submit" style={{marginTop:"3%"}}>Ingresar</button>
            </form>
        </div>
    )
}
export default LoginScreen