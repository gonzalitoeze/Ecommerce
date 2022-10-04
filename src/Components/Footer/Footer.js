


import './Footer.scss';
import  icono  from '../NavBar/icono.webp';
import  facebook  from './facebook.png'
import  instagram  from './instagram.png'
import  whatsapp  from './whatsapp.png'
import Navbar from 'react-bootstrap/Navbar';


export const Footer = () => {
    return(
        <div className="Footer">
            <Navbar bg="light" variant="light" className='foot'>
            <img src={icono} className="imagen" alt="" style={{width: '8%', marginLeft: '1%'}}/>
            <div className="contact">
                <p><strong>Adress:</strong> Ensenada 194 PB D, Ciudad Autónoma de Buenos Aires</p>
                <p><strong>Phone:</strong> (+54) 11-6421-6419</p>
                <p><strong>Hours:</strong> 8:00 - 18:00 / Mon-Sat</p>
            </div>
            
           {/*  <div className="follow">
                <p><strong>Follow us</strong></p>
                <div className="icon">
                    <a href="www.facebook.com"><img src={facebook} className="social" alt=''/></a>
                    <a href="www.instagram.com"><img src={instagram} className="social" alt=''/></a>
                    <a href="www.whatsapp.com"><img src={whatsapp} className="social" alt=''/></a>
                </div>
            </div> */}
            </Navbar>
        </div>
    )
}