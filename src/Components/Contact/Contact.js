



export const Contact = () => {
    return (
        <div className="contact">
            <img src="" alt=""/>
            <h3>Hi! If you need to contact us, please complete your information</h3>

            <section id="forms" class="container-fluid">
                <form>
                    <div class="form-group">
                      <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter name"/>
                    </div>
                    <div class="form-group">
                        <label for="InputSurname"></label>
                        <input type="name   " class="form-control" id="exampleInputSurname" aria-describedby="emailHelp" placeholder="Enter surname"/>
                    </div>
                    <div class="form-group">
                        <label for="InputNumber"></label>
                        <input type="number" class="form-control" id="exampleInputNumber" aria-describedby="emailHelp" placeholder="Enter telephone number"/>
                    </div>
                    <div class="form-group">
                      <label for="InputEmail"></label>
                      <input type="email" class="form-control" id="exampleInputEmail" placeholder="Enter email"/>
                    </div>
                    <br/>
                    <button type="button" onclick="capturar()" class="btn btn-primary">Submit</button>
                </form>
            </section>
        </div>
    )
}
