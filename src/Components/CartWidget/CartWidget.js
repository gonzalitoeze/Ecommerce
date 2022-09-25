import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext";

export const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)
    const { cartPrice } = useContext(CartContext)

    return (
        <div >
        <Link to='/'>
            <BsCart2/>
            <span className="cart">{cartQuantity()}</span> Price: $<span className="cart">{cartPrice()}</span>
        </Link>
        </div>
    );
}
export default CartWidget