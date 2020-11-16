import React, {Component} from 'react'; 
import '../custumers/custommer.style.css'; 

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

/* Cards images*/
import alingnLogo from '../../../public/images/logo-align.png'; 
import bccrLogo from '../../../public/images/logo-bccr.png'; 
import coseviLogo from '../../../public/images/logo-cosevi.png'; 
import cimaLogo from '../../../public/images/logo-cima.png'; 
import mucapLogo from '../../../public/images/logo-mucap.png'; 
// import iceLogo from '../../../public/images/logo-ice.png'; 
import daviviendaLogo from '../../../public/images/logo-davivienda.png'; 
import ctpLogo from '../../../public/images/logo-ctp.png'; 

class Custommers extends Component {

    render(){
        return(
            <section className="custommerSection">
                <div>
                    <div className="partnerHeader"> 
                        <h1>Clientes</h1> 
                    </div>
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
                            <img alt={"costummerLogo"} className="custommerImage" src={ cimaLogo }></img>
                        </li>
                        <li className="custommer-item column2" >
                            <img alt={"costummerLogo"} className="custommerImage" src={ mucapLogo }></img>
                        </li>
                        <li className="custommer-item column2" >
                            <img alt={"costummerLogo"} className="custommerImage" src={ daviviendaLogo }></img>
                        </li>
                        <li className="custommer-item column2 lasted" >
                            <img alt={"costummerLogo"} className="custommerImage" src={ ctpLogo }></img>
                        </li>
                    </ul>
                </div>

                <div className="casouselContainer">
                    <Carousel width="85%" infiniteLoop={true} swipeable={true} showArrows={false} autoPlay={true} interval={3000} stopOnHove={true} dynamicHeight={false}>
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
                        <img alt="custommerLogo" src={cimaLogo} />
                    </div>
                    <div>
                        <img alt="custommerLogo" src={mucapLogo} />
                    </div>
                    <div>
                        <img alt="custommerLogo" src={daviviendaLogo} />
                    </div>
                    <div>
                        <img alt="custommerLogo" src={ctpLogo} />
                    </div>
                </Carousel>
                </div>
            </section>
        );
    }
}

export default Custommers;