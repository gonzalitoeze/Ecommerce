
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar/NavBar';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import { AboutUs } from './Components/AboutUs/AboutUs';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import { CartProvider } from './Context/CartContext';
import { LoginProvider } from './Context/LoginContext';
import LoginScreen from './Components/LoginScreen/LoginScreen';

const App = () => {

  

  return (

    <LoginProvider>
      <CartProvider>
    
        <BrowserRouter className="App">
    
            <NavBar/>
    
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/products/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>

            <Route path='/login' element={<LoginScreen/>}/>
    
            <Route path='/cart' element={<Cart/>} />
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Routes>
            <Footer/>
    
        </BrowserRouter>
        
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
