import { useCartContext } from "../../Context/CartContext"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, cartPrice, emptyCart, removeItem } = useCartContext()


    if (cart.lenght === 0) {
      return (
        <div className="container my-5">
          <h2>Your cart is empty</h2>
          <hr/>
          <Link to='/' className="btn btn-success">Go shop!</Link>
        </div>
      )
    }

    return (
        <div className="container my-5">

            <h2>Your purchases</h2>

            { cart.map((item) => (
                <Card className="my-3" style={{minWidth:"600px"}}>
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
            <div style={{marginTop:"2%", marginLeft:"80%", minWidth:"600px"}}>
                <h4>Subtotal: ${cartPrice()}</h4>
                <Button variant="outline-secondary" onClick={emptyCart}>Clear cart</Button>
            </div>
            
        </div>
       
    )
}
export default Cart

