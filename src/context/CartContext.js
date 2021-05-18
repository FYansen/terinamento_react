import React, { createContext, useState } from 'react'

const CartContext = createContext();

export function CartContextProvider({ children }) {

    const [cart, setCart] = useState([]);

    function addProductCart(product) {
        setCart([...cart, product])
        console.log(cart)
    }

    const removeProductCart = (id) => {

    }

    return (
        <CartContext.Provider value={{
            cart,
            addProductCart
        }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext