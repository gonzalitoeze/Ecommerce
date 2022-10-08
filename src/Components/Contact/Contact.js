import './Contact.scss';




export const Contact = () => {


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
    }

    return (
        <div className="contact">
            <img src="" alt=""/>
            <h3 className='Help text-center'>Hi! If you need to contact us, please complete your information</h3>

            <section id="forms" className="container text-center">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputSurname"></label>
                        <input type="name" className="form-control" id="exampleInputSurname"  placeholder="Enter surname"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputNumber"></label>
                        <input type="number" className="form-control" id="exampleInputNumber" aria-describedby="emailHelp" placeholder="Enter telephone number"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="InputEmail"></label>
                      <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter email"/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </div>
    )
}