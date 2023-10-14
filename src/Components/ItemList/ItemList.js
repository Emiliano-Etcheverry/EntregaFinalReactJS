import React from 'react'
import Card from './Card'

const ItemList = ({cards}) => {
  return (
    <div className='cardGrid'>
        {cards.map(card=>
            <div className='cardContainer' key={card.id}>
                <Card cards={card}/> 
            </div>
        )}
    </div>
        
  )
}

export default ItemList