import React, {Component} from 'react'; 
import '../custumers/custommer.style.css'; 

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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

                <div className="casouselContainer">
                    <Carousel width="85%" swipeable={true} showArrows={false} autoPlay={true} interval={3000} stopOnHove={true} dynamicHeight={false}>
                    <div>
                        <img alt="custommerLogo" src={alingnLogo} />
                    </div>
                    <div>
                        <img alt="custommerLogo" src={bccrLogo} />
                    </div>
                    <div>
                        <img alt="custommerLogo" src={coseviLogo} />
                    </div>
                    <div>
                        <img alt="custommerLogo" src={mongeLogo} />
                    </div>
                    <div>
                        <img alt="custommerLogo" src={mucapLogo} />
                    </div>
                    <div>
                        <img alt="custommerLogo" src={esphLogo} />
                    </div>
                    <div>
                        <img alt="custommerLogo" src={daviviendaLogo} />
                    </div>
                    <div>
                        <img alt="custommerLogo" src={maycaLogo} />
                    </div>
                </Carousel>
                </div>
            </section>
        );
    }
}

export default Custommers;