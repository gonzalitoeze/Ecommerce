import { Card, CardBody, CardFooter, CardText, CardTitle } from 'reactstrap'
/* import ItemCount from '../ItemCount/ItemCount' */
import Counter from '../Counter/Counter'
import { useContext, useState } from 'react'
import Select from '../Select/Select'
import { CartContext } from '../../Context/CartContext'



const ItemDetail = ({item}) => {

    const { cart, setCart } = useContext(CartContext)
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

        setCart( [...cart, itemToCart] )
    }



    return (
        <div className="container">
            <Card
                className="my-2"
                style={{
                    width: '30%'
                }}>
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
                    <Counter max={item.stock}
                             counter={cantidad}
                             setCounter={setCantidad}
                             handleAddToCart={handleAddToCart}
                    />
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