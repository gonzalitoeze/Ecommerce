/* import { useEffect } from 'react'; */
import './AboutUs.scss';



export const AboutUs = () => {

    const handleSaludar = (name) => {
        console.log(name)
    }
    
    return (
        <div className="container text-center title">
            <h2 onClick={() => handleSaludar("Welcome to UKE!")}>ABOUT US</h2>
            <hr/>
            <h3>UKE SUPREME</h3>
            <p className="container">
                Since opening its operations in 2019, UKE has become one of the most respected bjj gi brands in the market. Now with a dedicated store in Argentina it is much simpler and faster to get your UKE products shipped directly to you.<br/>
                Why choose UKE? Because our gis are different. We innovate, experiment, test, and then test again. We have an eye for detail and quality, and a dedication to function and performance. <br/> We know the sport and how it's evolving, and we know what works and what doesn’t. That is it the story of our success.
                As a UKE customer you are buying in total confidence, from one of Jiu Jitsu’s most trusted brands. And if there is something wrong, we offer safe and easy returns... no questions asked. We make it right.
                <br/>Thanks for visiting UKE Arg!
            </p>
            <hr/>
        </div>
    )
} 
/* <h2 onClick={handleClick}>ABOUT US</h2> */