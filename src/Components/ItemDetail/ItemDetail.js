import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';

const ItemDetail = ({cards}) => {
    const param = useParams();
    const [content, setContent] = useState(null);
    
    console.log('me rerenderize');

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!cards.imageUrl || param.id !== cards.id){
                setContent('error');
            } else {
                setContent('detail');
            }
        }, 1000);

//Limpia el temporizador si el componente se desmonta antes de que el temporizador finalice
        return () => clearTimeout(timer);
    }, [param.id, cards.imageUrl, cards.id]);

    if (content === 'detail') {
        return (
            <div className='detailCard'>
                <div className='detail' key={cards.id}>
                    <img src={cards.imageUrl} alt={cards.id} />
                    <h2>{cards.price}</h2>
                    <p>{cards.text}</p>
                </div>
                <div>
                    <ItemCount cartCards={cards}/>
                </div>
            </div>   
        );
    } else if (content === 'error') {
        return (
            <div className='load'>
                <h1 className='elementError'>Producto no existente</h1>
            </div>
            
        );
    }

    return (
        <div className='load'>
            <h1 className='loading'>Cargando...</h1>
        </div>
        
    ); // Renderiza nulo si content es null (esperando)
}

export default ItemDetail;
