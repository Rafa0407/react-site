import React, { Component } from 'react';
import '../generalSections.style.css'
import '../netwotk/network.style.css';

import Accordion from '../netwotk/accordion';

import network from '../../../../public/images/logo-world.png';  
import videoImage from '../../../../public/images/diferencedna.png';  


class Network extends Component {
    render() {
        return (
            <div className="techSectionContainer">
                <div className="techSectionHeader">
                    <div className="techSectionHeaderImage">
                        <img alt="networkLogo" src={network} className="networkHeaderLogo"></img>
                    </div>
                    <div className="netHeaderText">
                        <h1>Redes</h1>
                        <p>
                            Aproveche todo el potencial de su red. Logre
                            innovar en TI y en su negocio con Cisco DNA.
                        </p>
                    </div>
                </div>

                <div className="videoImageContainer">
                    <a target="_blank" href="https://www.cisco.com/c/es_mx/solutions/enterprise-networks/dna-difference.html?oid=viden005718">
                        <img alt="ciscodnadiference" className="videoImage" src={videoImage}></img>
                    </a>
                </div>

                <div className="techSectionContent">
                    <h1>Soluciones que importan para su organización</h1>
                    <p className="techSectionText">
                        La Red Intuitiva, está impulsada por un sistema que se anticipa a las acciones,
                        detiene las ciberamenazas (incluso las ocultas en tráfico cifrado) y continúa
                        evolucionando y aprendiendo.
                    </p> 

                    <div className="accordion">
                            <Accordion />
                    </div>

                    <h3 className="techSectionText">Automatice su red</h3>
                    <p className="techSectionText">
                        Brinde dinamismo de la empresa y ampliación, automatizando una política
                        en toda la red de acceso.
                    </p>

                    <ul className="techSectionText">
                        <li> SD-Access.</li>
                        <li>Servicios de SD-Access.</li>
                    </ul>

                    <h3 className="techSectionText">Menores costos de WAN</h3>
                    <p className="techSectionText">
                        Simplifique la red de área amplia, sin poner en riesgo la experiencia del
                        usuario, la seguridad, ni la confiabilidad.
                    </p>

                    <ul className="techSectionText">
                        <li>SD-WAN (actualización).</li>
                        <li>Servicios de SD-WAN.</li>
                    </ul>

                    <h3 className="techSectionText">Garantice el rendimiento de las redes</h3>
                    <p className="techSectionText">
                        Solucione los problemas más rápido y mejore la productividad de TI con un
                        contexto que ofrece información procesable. 
                    </p>

                    <ul className="techSectionText">
                        <li>DNA Center.</li>
                        <li>Analítica y aseguramiento.</li>
                    </ul>

                    <h3 className="techSectionText">Detecte y mitigue las amenazas</h3>
                    <p className="techSectionText">
                        Afronte las amenazas y las vulnerabilidades de cualquier parte de la red,
                        incluso las que se ocultan en tráfico cifrado.
                    </p>

                    <ul className="techSectionText">
                        <li>Seguridad de SDN.</li>
                        <li>Seguridad de SD-WAN (nuevo).</li>
                    </ul>

                    <div className="techBtnContainer">
                        <a className="linkBtn" href="https://www.cisco.com/c/es_cr/solutions/enterprise-networks/index.html" target="_blank">
                            Ver más
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Network;