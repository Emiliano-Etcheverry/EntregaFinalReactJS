import React , {useState , useContext} from "react";
import {useCartContext} from '../../Context/CartContext';

const ItemCount = ({cartCards}) => {

    const [counter, setCounter] = useState(1);
    const stock = cartCards.stock;
    const {addProduct} = useCartContext();

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        } 
    }

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
        
    }

    const handleAdd = ()=>{
        addProduct(cartCards, counter);
        setCounter(1);
    }
   
    return(
    <div className="count">
        <div className="countButtons">     
            <button type="button" onClick={decrementarStock} >-</button>
            <button type="button" >{counter}</button>
            <button type="button" onClick={incrementarStock} >+</button>                          
        </div>
        <div className="agregarButton">
            <button className="agregar" type="button" onClick={handleAdd}>🛒</button>    
        </div>
    </div>  
    )
}

export default ItemCount;