import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCart from './ItemCart';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
 
  if (cart.length === 0) {
    return (
      <div className='cartBack'>
        <p>No se han seleccionado elementos</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className='cartBox'>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Total: $ {totalPrice().toFixed(2)}</p>
   
      <Link to="/checkout">
        {''}
        <button className="buttonCompra">Finalizar Compra</button>
      </Link> 
    </div>
  );
};

export default Cart;