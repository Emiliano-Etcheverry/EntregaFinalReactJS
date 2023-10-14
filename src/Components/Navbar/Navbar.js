import CartWidget from './CartWidget';
import Logo from '../../img/logo.png';
import {Link} from "react-router-dom";

document.querySelectorAll('.link').forEach(link =>{
  if (link.href === window.location.href){
    link.className= 'link active';
  }
})

function Navbar() {
  return (
    <div className='sidebar'>
      <section className='wrapper'>
          <div className='navLogo'>
            <img className='logo' src={Logo} alt=''/>
            <span>Card Kingdom</span>
          </div>    
        <nav>
          <ul className='navLinks'>
            <li className='link'>
              <Link to='/'> 
                <i class="bi bi-sd-card"><span>Cards</span></i>
              </Link>
            </li >
            <hr/>
            <p>Raritys</p>
            <li className='link'>
              <Link to='/rarity/rare'> 
              <i class="bi bi-arrow-up-circle"><span>Rare</span></i>
              </Link>
            </li>
  
            <li className='link'>
              <Link to='/rarity/uncommon'>
                <i class="bi bi-arrow-up-right-circle"><span>Uncommon</span></i> 
              </Link>
            </li>

            <li className='link'>
              <Link to='/rarity/common'> 
                <i class="bi bi-arrow-right-circle"><span>Common</span></i>
              </Link>
            </li>
            
            <li className='link'>
              <Link to='/cart'>
                <CartWidget/>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;