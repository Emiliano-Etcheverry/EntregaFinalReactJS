import React from 'react'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  
    const[card, setCard] = useState([]);
    const{id}= useParams();
  

    useEffect(()=>{
        const queryDb = getFirestore();
        const queryDoc = doc(queryDb, 'cards', id);
        getDoc(queryDoc).then((res)=>setCard({id: res.id, ...res.data()}));
    },[id])

    console.log('me renderize')
    return (
    <div className='itemList' key={card.id}>
        <ItemDetail cards={card}/>
    </div>
  )
}

export default ItemDetailContainer