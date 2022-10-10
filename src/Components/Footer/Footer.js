import './Footer.scss';
import  icono  from '../NavBar/icono.webp';
import Navbar from 'react-bootstrap/Navbar';


export const Footer = () => {
    return(
        <div className="Footer">
            <Navbar bg="light" variant="light" className='foot'>
            <img src={icono} className="imagen" alt="" style={{width: '20%', marginLeft: '5%', paddingRight:'10%'}}/>
            <div className="contact">
                <p><strong>Address:</strong> Calle de Viriato 5, 28018 Madrid, España</p>
                <p><strong>Phone:</strong> (+34) 662567229</p>
                <p><strong>Hours:</strong> 8:00 - 18:00 / Mon-Sat</p>
            </div>
            
           
            </Navbar>
        </div>
    )
}