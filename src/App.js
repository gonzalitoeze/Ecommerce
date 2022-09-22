
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar/NavBar';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import { AboutUs } from './Components/AboutUs/AboutUs';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import  { CartContext }  from './Context/CartContext';
import { useState } from 'react';

const App = () => {

  const [cart, setCart] = useState([])

  return (

    <CartContext.Provider value={ { 
      cart,
      setCart
    } }>

      <BrowserRouter className="App">

          <NavBar/>

        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/products/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>

        </Routes>
        <Routes>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
          <Footer/>

      </BrowserRouter>
      
    </CartContext.Provider>
  );
}

export default App;
