import React from 'react';
import { useCartContext } from '../../Context/CartContext';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <div className='cartContent'>
                <div className='cartProduct'>
                    <img className='imgCart' src={product.imageUrl} alt={product.title} />
                    <p>Cantidad: {product.quantity}</p>
                </div>
                
                <div className='cartDesc'>   
                    <div>
                        <p>{product.name}</p>
                        <p>$ {product.price}</p>
                    </div>
                    
                    <p>Subtotal: ${(product.quantity * product.price).toFixed(2)}</p>
                    <button onClick={() => removeProduct(product.id)}>Quitar</button>
                </div>
               
                
                
            </div>
        </div>
    )
}

export default ItemCart 