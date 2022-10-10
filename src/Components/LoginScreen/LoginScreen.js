import { useContext } from "react"
import { LoginContext } from "../../Context/LoginContext"
import { useForm } from "../../Hook/useForm"



const LoginScreen = () => {

    const {login, user} = useContext(LoginContext)
    const { values, handleInputChange } = useForm({
        email:'',
        pass: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
    }

    return(
        <div className="container text-center" style={{marginTop:"5%", marginBottom:"3%", minWidth:'600px'}}>
            <form onClick={handleSubmit}>
                <input 
                    name="email"
                    style={{marginBottom:"3%"}}
                    type={'text'}
                    className='form-control'
                    value={values.email}
                    onChange={handleInputChange}
                    placeholder='Enter email'
                />
                <input
                    name="pass"
                    type={'password'}
                    className='form-control'
                    value={values.pass}
                    onChange={handleInputChange}
                    placeholder='Enter password'
                />
                {user.error && <small className="alert">{user.error}</small>}


                <button className='btn btn-primary' type="submit" style={{marginTop:"3%"}}>Ingresar</button>
            </form>
        </div>
    )
}
export default LoginScreen