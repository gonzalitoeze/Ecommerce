import { createContext, useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";



export  const CartContext = createContext()
const init = JSON.parse(localStorage.getItem('carrito')) || []
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(init)
  
  const AddToCart = (item) => {
    setCart ([...cart, item])
  }

/*   const increaseQuantityInCart = (id) => {
    const newCart = cart.slice() || [...cart]
    buscar el item a modificar segun ID 
    verificar que la modificacion sea posible
    setCart(newCart)
  } */

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const isInCart = (id) => {
    return cart.find((item) => item.id === id)
  }

  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }
  const cartPrice = () => {
    return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
  }
  const emptyCart = () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#A7A4A4',
        cancelButtonColor: '#198754',
        confirmButtonText: 'Yes, empty it!'
      }).then((result) => {
        if (result.isConfirmed) {
            setCart([])
        }})
  }

  const finishPurchase = (id) => {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: `Purchase has been successful. Order ${id}`,
      showConfirmButton: true,
      confirmButtonColor: '#198754',
      confirmButtonText: 'Oss!',
    })
    setCart([])
  }

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(cart))
  }, [cart])

    return (
        <CartContext.Provider value={ { 
            cart,
            AddToCart,
            isInCart,
            cartQuantity,
            cartPrice,
            emptyCart,
            removeItem,
            finishPurchase
          } }>
            {children}

        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}