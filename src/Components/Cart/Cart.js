import { useCartContext } from "../../Context/CartContext"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cart = () => {

    const { cart, cartPrice, emptyCart, removeItem} = useCartContext()

    return (
        <div className="container my-5">
            <h2>Your purchases</h2>

            { cart.map((item) => (
                <Card className="my-3">
                <Card.Header as="h5"><Button variant="outline-secondary" onClick={() => removeItem(item.id)} style={{marginLeft:"90%"}}>Remove</Button></Card.Header>
                <Card.Body>
                  <Card.Title><h2>{item.nombre}</h2></Card.Title>
                  <Card.Text >
                    Price ${item.precio}
                  </Card.Text>
                  <Card.Text>
                    Size: {item.talle}
                  </Card.Text>
                  <Card.Text>
                    Amount: {item.cantidad}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
            <div style={{marginTop:"2%", marginLeft:"80%"}}>
                <h3>Subtotal: ${cartPrice()}</h3>
                <Button variant="outline-secondary" onClick={emptyCart}>Empty cart</Button>
            </div>
            
            
        </div>
       
    )
}
export default Cart

