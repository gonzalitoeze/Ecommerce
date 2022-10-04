import { BrowserRouter } from "react-router-dom"
import { useLoginContext } from "../Context/LoginContext"
import { NavBar } from '../Components/NavBar/NavBar';
import { Footer } from '../Components/Footer/Footer';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import Header from "../Components/Header/Header";




const AppRouter = () => {

    const {user} = useLoginContext()

    return (
        <BrowserRouter>
            <NavBar/>
            <Header/>
            {
                user.logged
                ?  <PrivateRoutes/>
                :  <PublicRoutes/>
            }
            <Footer/>

        </BrowserRouter>
    )
}
export default AppRouter