
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar/NavBar';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <BrowserRouter className="App">
      
        <NavBar/>
      <Routes>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
        <ItemListContainer/>
        <Footer/>
      
    </BrowserRouter>
  );
}

export default App;
