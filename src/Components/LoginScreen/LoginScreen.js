



const LoginScreen = () => {

    return(
        <div className="container" style={{marginTop:"5%", marginBottom:"3%"}}>
            <form>
                <input
                    type={'text'}
                    className='form-control'
                    style={{marginBottom:"3%"}}
                />
                <input
                    type={'password'}
                    className='form-control'
                />
                <button className='btn btn-primary' type="submit" style={{marginTop:"3%"}}>Ingresar</button>
            </form>
        </div>
    )
}
export default LoginScreen