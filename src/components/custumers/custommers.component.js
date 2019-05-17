import React, {Component} from 'react'; 
import CustomerSlider from "react-slick";
import '../custumers/custommer.style.css'; 

/* Cards images*/
import alingnLogo from '../../../public/images/logo-align.png'; 
import bccrLogo from '../../../public/images/logo-bccr.png'; 
import coseviLogo from '../../../public/images/logo-cosevi.png'; 
import mongeLogo from '../../../public/images/logo-monge.png'; 
import mucapLogo from '../../../public/images/logo-mucap.png'; 
import esphLogo from '../../../public/images/logo-esph.png'; 
import daviviendaLogo from '../../../public/images/logo-davivienda.png'; 
import maycaLogo from '../../../public/images/logo-mayca.png'; 

class Custommers extends Component {

    render(){

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1, 
            fade: true,
            adaptiveHeight: true
          };
        return(
            <section className="custommerSection">
                <div>
                    <ul className="custommerContainer">
                        <li className="custommer-item column1 " >
                            <img alt={"costummerLogo"} className="custommerImage" src={ alingnLogo }></img>
                        </li>
                        <li className="custommer-item column1" >
                            <img alt={"costummerLogo"} className="custommerImage" src={ bccrLogo }></img>
                        </li>
                        <li className="custommer-item column1" >
                            <img alt={"costummerLogo"} className="custommerImage" src={ coseviLogo }></img>
                        </li>
                        <li className="custommer-item column1 lasted" >
                            <img alt={"costummerLogo"} className="custommerImage" src={ mongeLogo }></img>
                        </li>
                        <li className="custommer-item column2" >
                            <img alt={"costummerLogo"} className="custommerImage" src={ mucapLogo }></img>
                        </li>
                        <li className="custommer-item column2" >
                            <img alt={"costummerLogo"} className="custommerImage" src={ esphLogo }></img>
                        </li>
                        <li className="custommer-item column2" >
                            <img alt={"costummerLogo"} className="custommerImage" src={ daviviendaLogo }></img>
                        </li>
                        <li className="custommer-item column2 lasted" >
                            <img alt={"costummerLogo"} className="custommerImage" src={ maycaLogo }></img>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Custommers;