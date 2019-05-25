import React, { Component } from 'react';
import Iframe from 'react-iframe'; 
import '../generalSections.style.css'
import '../colaboration/colaboration.style.css'


import colaboracion from '../../../../public/images/logo-nube.png'; 

class Cloud extends Component {
    render() {
        return (
            <div className="techSectionContainer">
                <div className="techSectionHeader">
                    <div className="techSectionHeaderImage">
                        <img alt="securityLogo" src={colaboracion} className="techSectionHeaderLogo"></img>
                    </div>
                    <div className="techSectionHeaderText">
                        <h1>Soluciones de nube</h1>
                        <p>
                            Posibilite un mundo multinube.
                        </p>
                    </div>
                </div>
                <div className="techSectionVideoContainer">
                    <Iframe url="https://www.youtube.com/embed/qLyYuEz-ws0"
                        id="cloudVideo"
                        className="techSectionVideo"
                        display="inline"
                        allow="fullscreen"
                     />
                </div>
                <div className="techSectionContent">
                    
                    <h3 className="techSectionText">Soluciones de nube privada</h3>
                    <p className="techSectionText">
                    Simplifique, automatice y optimice su nube privada y prepárela para la era multinube.
                    </p>

                    <h3 className="techSectionText">Soluciones de nube híbrida y pública</h3>
                    <p className="techSectionText">
                        Acelere la innovación con soluciones de nube híbrida y pública
                        compatibles con la próxima generación de aplicaciones.
                    </p>


                    <h1>Producto destacado</h1> 
                
                    <h3 className="techSectionText">Cisco CloudCenter compatible con Kubernetes</h3>
                    <p className="techSectionText">
                        Innove más rápido con Cisco CloudCenter.
                        CloudCenter 4.9 ahora incluye compatibilidad nativa con Kubernetes y
                        Azure Stack.    
                    </p>
                    
                </div>
            </div>
        );
    }
}
export default Cloud;