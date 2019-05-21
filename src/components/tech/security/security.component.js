import React, { Component } from 'react';
import Iframe from 'react-iframe'
import '../security/security.style.css';


import seguridad from '../../../../public/images/logo-candado.png'; 

class Security extends Component {
    render() {
        return (
            <div className="securityContainer">
                <div className="securityHeader">
                    <div className="secHeaderImage">
                        <img alt="securityLogo" src={seguridad} className="securityLogo"></img>
                    </div>
                    <div className="secHeaderText">
                        <h1>Seguridad</h1>
                        <p>
                            Detecte y detenga las amenazas de manera más
                            eficaz con nuestros productos de ciberseguridad
                        </p>
                    </div>
                </div>
                <div className="securityVideoContainer">
                    <Iframe url="//players.brightcove.net/1384193102001/NJgI8K0ie_default/index.html?videoId=5360439015001"

                        id="securityVideo"
                        className="securityVideo"
                        display="initial"
                        position="relative"
                     />
                </div>
                <div className="securityContent">
                    <h3 className="secText">Simplifique la complejidad de seguridad, 
                        mantenga su negocio protegido y aumente la productividad de IT.
                    </h3>
                    <ul className="secText">
                        <li>
                        Protección avanzada contra malware.
                        </li>
                        <li>
                        Seguridad en la nube.
                        </li>
                        <li>
                        Seguridad de correo electrónico.
                        </li>
                        <li>
                        Seguridad web.
                        </li>
                        <li>
                        Seguridad de terminales.
                        </li>
                        <li>
                        Clientes VPN Security.
                        </li>
                        <li>
                        Administración de la seguridad.
                        </li>
                    </ul>

                    <h1>
                        Soluciones de seguridad destacadas
                    </h1>
                    <h3 className="secText">Centro de datos seguro de Cisco:</h3>
                    <p className="secText">Los centros de datos modernos necesitan un nuevo enfoque de seguridad.</p>
                    <h3 className="secText">Ciberseguridad y seguros</h3>
                    <p className="secText">Cisco, Apple, Aon y Allianz están reuniendo las piezas clave necesarias 
                       para abordar amenazas cibernéticas.</p>
                    <h3 className="secText">Cisco Ransomware Defense</h3>
                    <p className="secText">Nuestra solución utiliza un enfoque de arquitectura para fortalecer las 
                        defensas con detección, visibilidad e inteligencia.</p>
                    <h3 className="secText">Cisco TrustSec</h3>
                    <p className="secText">Nuestra tecnología de segmentación definida por software facilita la 
                        aplicación dinámica de políticas basada en roles en toda la red.</p>
                    
                    <h1>¿Por qué la seguridad de Cisco?</h1>
                    <p className="secText">
                    En un mundo con más datos, más usuarios y más servicios, hay más
                    para proteger. Mientras tanto, las ciberamenazas evolucionan
                    permanentemente para ganar inteligencia y sofisticación.
                    </p>
                    <p className="secText">
                    Cisco tiene una agencia de seguridad que reúne a científicos y hackers, que
                    a través del software Cisco TrustSec toma huellas digitales de todos los
                    datos y aprende sobre el malware para proteger a las organizaciones. Se
                    puede averiguar más de este universo de Cisco aquí: 
                    <a href="https://www.cisco.com/c/en/us/products/security/talos.html"> CISCO Talos</a>
                    </p>


                </div>

            </div>

        );
    }
}
export default Security;

