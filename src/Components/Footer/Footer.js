


import './Footer.scss';
import  icono  from '../NavBar/icono.webp';
import  facebook  from './facebook.png'
import  instagram  from './instagram.png'
import  whatsapp  from './whatsapp.png'

export const Footer = () => {
    return(
        <div class="Footer">
            <img src={icono} class="imagen" alt="" style={{width: '8%', marginLeft: '1%'}}/>
            <div class="contact">
                <p><strong>Adress:</strong> Ensenada 194 PB D, Ciudad Autónoma de Buenos Aires</p>
                <p><strong>Phone:</strong> (+54) 11-6421-6419</p>
                <p><strong>Hours:</strong> 8:00 - 18:00 / Mon-Sat</p>
            </div>
            <div class="follow">
                <p><strong>Follow us</strong></p>
                <div class="icon">
                    <a href="www.facebook.com"><img src={facebook} class="social" alt=''/></a>
                    <a href="www.instagram.com"><img src={instagram} class="social" alt=''/></a>
                    <a href="www.whatsapp.com"><img src={whatsapp} class="social" alt=''/></a>
                </div>
            </div>
        </div>
    )
}