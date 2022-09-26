import { Card, CardBody, CardFooter, CardText, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'
import Counter from '../Counter/Counter'
import { useState } from 'react'

const Item = ({producto}) => {

    const [cantidad, setCantidad] = useState(1)

    const handleAddToCart = () => {
        console.log({
            ...producto,
            cantidad,
        })
    }

    return (
            <div className='Item'>
                
                <Card
                    className="Item my-5"
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
                        <Counter max={producto.stock}
                                 counter={cantidad}
                                 setCounter={setCantidad}
                                 handleAddToCart={handleAddToCart}
                        
                        />

                        <Link to={`/item/${producto.id}`} className='btn btn-secondary' style={{width: "100%" , marginTop: "2%", backgroundColor: "white", color: "gray", textDecoration: 'none' }}> View Details </Link>
                    </CardBody>
                    <CardFooter>
                        Stock: {producto.stock}
                    </CardFooter>
                </Card>
            </div>
    )
}
export default Item