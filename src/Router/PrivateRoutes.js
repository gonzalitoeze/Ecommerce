import { Contact } from '../Components/Contact/Contact';
import { AboutUs } from '../Components/AboutUs/AboutUs';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../Components/Cart/Cart';
import { Routes, Route } from 'react-router-dom';
import LoginScreen from '../Components/LoginScreen/LoginScreen';



const PrivateRoutes = () => {
    return (
        <>
                {/* Router Privado */}
            <Routes>
              <Route path='/products/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/aboutus' element={<AboutUs/>}/>
              <Route path='contact' element={<Contact/>}/>
              <Route path='/cart' element={<Cart/>} />
              <Route path='/login' element={<LoginScreen/>}/>
            </Routes>
        </>
    )
}
export default PrivateRoutes
