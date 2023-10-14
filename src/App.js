import './scss/style.scss';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './Components/Error';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer'; 
import CartProvider from './Context/CartContext';
import {Checkout} from './Components/Checkout/Checkout';
import Cart from './Components/Cart/Cart';

function App() {
  return (

    <BrowserRouter>   
    <CartProvider>
      <Navbar/>
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>}/>
          <Route path={"/rarity/:id"} element={<ItemListContainer/>}/>
          <Route path={"/card/:id"} element={<ItemDetailContainer/>}/>
          <Route path={"/cart"} element={<Cart/>}/>
          <Route path={"/checkout"} element={<Checkout/>}/>
          <Route path={'*'} element={<Error/>}/>
        </Routes>
      </CartProvider>   
    </BrowserRouter>
  );
}

export default App;
