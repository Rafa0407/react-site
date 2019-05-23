import React, { Component } from 'react';
import '../generalSections.style.css'
import '../consulting/consulting.style.css';


import consulting from '../../../../public/images/logo-grafico.png';  

// icons 

import icon4 from '../../../../public/images/icon4.png';
import icon5 from '../../../../public/images/icon5.png';
import icon6 from '../../../../public/images/icon6.png';
import icon7 from '../../../../public/images/icon7.png';

class Consulting extends Component {
    render() {
        return (
            <div className="techSectionContainer">
                <div className="consultingSectionHeader">
                    <div className="consultingHeaderImage">
                        <img alt="consultingLogo" src={consulting} className="consultingHeaderLogo"></img>
                    </div>
                    <div className="consultingHeaderText">
                        <h1>Consultoría avanzada</h1>
                    </div>
                </div>

                <div className="consultingIconsContainer">
                    <div className="consultingIconInfo">
                        <img alt="iconConsulting" className="consultingIcon" src={icon4}></img>
                        <p>Entendemos las redes de su negocio.</p>
                    </div>

                    <div className="consultingIconInfo">
                        <img alt="iconConsulting" className="consultingIcon"  src={icon5}></img>
                        <p>Implementamos la solución.</p>
                    </div>

                    <div className="consultingIconInfo">
                        <img alt="iconConsulting" className="consultingIcon"  src={icon6}></img>
                        <p>Se estudian las posibles soluciones tecnológicas.</p>
                    </div>

                    <div className="consultingIconInfo">
                        <img alt="iconConsulting" className="consultingIcon"  src={icon7}></img>
                        <p>Damos soporte durante y después del proceso.</p>
                    </div>
                </div>
 
            </div>
        );
    }
}
export default Consulting;