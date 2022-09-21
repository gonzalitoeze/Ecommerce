
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar/NavBar';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import { AboutUs } from './Components/AboutUs/AboutUs';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


const App = () => {
  return (
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
  );
}

export default App;
