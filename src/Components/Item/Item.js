const Item = ({producto}) => {
    return (
            <div >
                    <img src={producto.img} alt=''/>
                    <h4>{producto.nombre}</h4>
                    <p>{producto.desc}</p>
                    <p>Precio: ${producto.precio}</p>
                    <small>Stock: {producto.stock}</small>
                    <a href="/" className="btn btn-primary my-2">Ver más</a>
                    <hr/>
                </div>
    )
}
export default Item