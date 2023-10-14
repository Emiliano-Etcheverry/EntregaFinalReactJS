import React , {useContext} from 'react'
import {useCartContext} from '../../Context/CartContext';

const CartWidget = () => {

  const {totalProducts} = useCartContext();
  return (
    <div className='comprar'>
      <i class="bi bi-basket"><span>{totalProducts()}</span></i>
    </div>
  )
}

export default CartWidget