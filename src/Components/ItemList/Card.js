import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({cards}) => {
  return (
    <Link to={'/card/' + cards.id}>
      <div className='cardGrid'>              
                <div className='card'>
                <header className='descripcion'>
                    <div className='type'>
                        <h1>{cards.colors}</h1>
                    </div>
                    <div className='textType'>
                        <h2 className='cardType'>{cards.types}</h2>
                        <p className='cardName'>{cards.name}</p>
                    </div>
                    <div className='fav'>
                        <h3>{cards.manaCost}</h3>
                    </div>
                </header>
                <section className='cuerpo'>
                    <img src={cards.imageUrl} alt=''/>
                </section>
                <section className='footer'> 
                    <div className='cardRarity'>
                        <h3>{cards.setName}</h3>
                        <h2>Rareza: <span>{cards.rarity}</span></h2>    
                    </div>
                    <button className='cartButton'>🛒</button>
                </section>
            </div>              
        </div> 
    </Link>
  )
}

export default Item