import { createContext } from "react";
import { useState } from 'react';



export  const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
  
  const AddToCart = (item) => {
    setCart ([...cart, item])
  }

  const isInCart = (id) => {
    return cart.find((item) => item.id === id)
  }

  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }
  const cartPrice = () => {
    return cart.reduce((acc, item) => acc + item.precio, 0)
  }

    return (
        <CartContext.Provider value={ { 
            cart,
            AddToCart,
            isInCart,
            cartQuantity,
            cartPrice
          } }>
            {children}

        </CartContext.Provider>
    )
}