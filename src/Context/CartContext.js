import React, { useState, useContext } from 'react';

const CartContext = React.createContext('');

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  
    const [cart, setCart] = useState([]);

    const addProduct = (item, quantity) => {
      if (isInCart(item.id)) {
        setCart(
          cart.map((product) => {
            return product.id === item.id
              ? { ...product, quantity: product.quantity + quantity }
              : product;
          })
        );
      } else {
        setCart([...cart, { ...item, quantity }]);
      }
    };

    

    const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

    const totalProducts = () => 
      cart.reduce(
        (acumulador,prodActual) => acumulador + prodActual.quantity,
        0
    );

    const totalPrice = () => {
      return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    };

    const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));
    
    const clear = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        totalProducts,
        isInCart,
        addProduct,
        totalPrice,
        removeProduct,
        clear,
        cart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
