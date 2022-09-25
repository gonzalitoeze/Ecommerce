import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"
import Card from 'react-bootstrap/Card';

const Cart = () => {

    const { cart } = useContext(CartContext)

    return (
        <div className="container my-5">
            <h2>Your purchases</h2>

            { cart.map((item) => (
                <Card>
                <Card.Header as="h5"></Card.Header>
                <Card.Body>
                  <Card.Title><h2>{item.nombre}</h2></Card.Title>
                  <Card.Text >
                    Price ${item.precio}
                  </Card.Text>
                  <Card.Text>
                    Size: {item.talle}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
            <br/>
        </div>
       
    )
}
export default Cart

