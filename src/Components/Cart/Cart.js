import { useCartContext } from "../../Context/CartContext"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, Navigate } from "react-router-dom";

const Cart = () => {

    const { cart, cartPrice, emptyCart, removeItem } = useCartContext()

    if (cart.lenght === 0) {
      return (
          <Navigate to='/' />
        )
    }
    
    return (
        <div className="container">

            <h2>Your purchases</h2>

            { cart.map((item) => (
                <Card className="my-3">
                <Card.Header as="h5"><Button variant="outline-secondary" onClick={() => removeItem(item.id)} style={{marginLeft:"85%"}}>Remove</Button></Card.Header>
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
            <div className="text-center" style={{marginTop:"5%", marginBottom:"5%"}}>
                <h4>Subtotal: ${cartPrice()}</h4>
                <Button variant="outline-secondary" onClick={emptyCart}>Clear cart</Button>
                <Link className="btn btn-success mx-2" to='/checkout'>Checkout</Link>
            </div>
        </div>
    )
}
export default Cart