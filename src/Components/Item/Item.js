import { Card, CardBody, CardFooter, CardText, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'
import Counter from '../Counter/Counter'

const Item = ({producto}) => {
    return (
            <div className='Item'>
                
                <Card
                    className="my-2"
                    style={{
                        width: '30%'
                    }}>
                    <img src={producto.img} alt="" />
                    <CardBody>
                        <CardTitle tag="h5">
                            {producto.nombre}
                        </CardTitle>
                        <CardText>
                            {producto.desc}
                        </CardText>
                        <CardText>
                            ${producto.precio}
                        </CardText>
                        <Counter max={producto.stock}/>

                        <Link to={`/item/${producto.id}`} className='btn btn-secondary' style={{width: "100%" , marginTop: "2%", backgroundColor: "white", color: "gray", textDecoration: 'none' }}> View Details </Link>
                    </CardBody>
                    <CardFooter>
                        Stock: {producto.stock}
                    </CardFooter>
                </Card>
                    {/* <img src={producto.img} alt=''/>
                    <h4>{producto.nombre}</h4>
                    <p>{producto.desc}</p>
                    <p>Precio: ${producto.precio}</p>
                    <small>Stock: {producto.stock}</small>
                    <a href="/" className="btn btn-primary my-2">Ver más</a>
                    <hr/> */}
            </div>
    )
}
export default Item