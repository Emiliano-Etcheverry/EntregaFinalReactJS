import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore';
import ItemList from './ItemList';

const ItemListContainer = () => {

  const[card, setCards] = useState([]);
  const[loading, setLoading] = useState(true);
  const{id}= useParams();

  //Pone la primer letra en Mayus
  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  useEffect(()=>{
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, 'cards');
    setLoading(false); 
    if (id){
      const queryFilter = query(queryCollection, where('rarity', '==', capitalize(id)));
      getDocs(queryFilter).then((res)=> setCards(res.docs.map((p)=> ({id: p.id, ...p.data()})))
      );
      console.log(queryFilter);
    }else {
      getDocs(queryCollection).then((res)=> setCards(res.docs.map((p)=>({id: p.id, ...p.data()}))))
    }
  }, [id]);    

  return (
    <div className='itemListContainer'>
        <ItemList cards={card}/>
    </div>
  )
}

export default ItemListContainer