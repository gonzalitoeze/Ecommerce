import './Contact.scss';




export const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
    }

    return (
        <div className="contact">
            <img src="" alt=""/>
            <h3 className='Help'>Hi! If you need to contact us, please complete your information</h3>

            <section id="forms" className="container-fluid">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter name"/>
                    </div>
                    <div className="form-group">
                        <label for="InputSurname"></label>
                        <input type="name   " className="form-control" id="exampleInputSurname" aria-describedby="emailHelp" placeholder="Enter surname"/>
                    </div>
                    <div className="form-group">
                        <label for="InputNumber"></label>
                        <input type="number" className="form-control" id="exampleInputNumber" aria-describedby="emailHelp" placeholder="Enter telephone number"/>
                    </div>
                    <div className="form-group">
                      <label for="InputEmail"></label>
                      <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter email"/>
                    </div>
                    <br/>
                    <button style={{borderRadius: "0px", textAlign: "center"}} type="submit" /* onClick="capturar()" */ className="btn btn-primary">Submit</button>
                </form>
            </section>
        </div>
    )
}
