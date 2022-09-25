import { Card, CardBody, CardFooter, CardText, CardTitle } from 'reactstrap'
/* import ItemCount from '../ItemCount/ItemCount' */
import Counter from '../Counter/Counter'
import { useContext, useState } from 'react'
import Select from '../Select/Select'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'



const ItemDetail = ({item}) => {

    const { cart, AddToCart, isInCart } = useContext(CartContext)
    console.log(cart)

    const [cantidad, setCantidad] = useState(1)
    const [talle, setTalle] = useState(item.options[0].value)


    const handleAddToCart = () => {
        const itemToCart = {
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            talle,
            cantidad
        } 
        console.log(isInCart(item.id))
        AddToCart( itemToCart )
    }



    return (
        <div className="container my-5">
            <Card
                className="my-2"
                >
                <img src={item.img} alt="" />
                <CardBody>
                    <CardTitle tag="h5">
                        {item.nombre}
                    </CardTitle>
                    <CardText>
                        {item.desc}
                    </CardText>
                    <CardText>
                        ${item.precio}
                    </CardText>
                    <hr/>
                    <Select options={item.options} onSelect={setTalle}/>
                    <hr/>

                    {
                        isInCart(item.id)
                        ? <Link to='/cart' className='btn btn-secondary my-2'>Checkout</Link>
                        :   <Counter 
                                max={item.stock}
                                counter={cantidad}
                                setCounter={setCantidad}
                                handleAddToCart={handleAddToCart}
                            />
                    }

                    

                    {/* <ItemCount/> */}
                </CardBody>
                <CardFooter>
                    Stock: {item.stock}
                </CardFooter>
            </Card>

            
                    
        </div>
            
    )
}
export default ItemDetail

/* <img src={item.img} alt="" />
            <h3>{item.nombre}</h3>
            <h3>{item.desc}</h3>
            <h3>{item.category}</h3>
            <h4>{item.precio}</h4> */