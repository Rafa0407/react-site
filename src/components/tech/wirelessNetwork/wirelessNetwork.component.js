import React, { Component } from 'react';
import Iframe from 'react-iframe'; 
import '../generalSections.style.css'
import '../wirelessNetwork/wirelessNetwork.style.css';


import wirlessNet from '../../../../public/images/logo-de-señal.png'; 

class WirelessNetwork extends Component {
    render() {
        return (
            <div className="techSectionContainer">
                <div className="techSectionHeader">
                    <div className="wirlessHeaderImage">
                        <img alt="securityLogo" src={wirlessNet} className="wirlessHeaderLogo"></img>
                    </div>
                    <div className="wirlessHeaderText">
                        <h1>Redes inalámbricas y movilidad</h1>
                        <p>
                            Viaje al pasado con Cisco DNA Center Assurance. Quizás no vaya a
                            participar de una batalla épica, pero podrá solucionar los problemas
                            de sus redes cableadas e inalámbricas.
                        </p>
                    </div>
                </div>
                <div className="techSectionVideoContainer">
                    <Iframe url="https://www.youtube.com/embed/-1-yJED67jY"
                        id="wirlessNetVideo"
                        className="techSectionVideo"
                        display="inline"
                        allow="fullscreen"
                     />
                </div>
                <div className="techSectionContent">

                    <h1>
                        Una arquitectura cableada e inalámbrica
                        para satisfacer las demandas en permanente
                        cambio.
                    </h1> 

                    <h3 className="techSectionText">Adáptese a la demanda móvil</h3>
                    <p className="techSectionText">
                        56% de las líneas de negocios afirman que la estrategia móvil es muy
                        o extremamente importante para sus objetivos, según IDC.
                    </p>

                    <h3 className="techSectionText">Prepárese para el crecimiento de IoT</h3>
                    <p className="techSectionText">
                        Para el 2021, el 51% de los dispositivos de red serán de máquina a
                        máquina (Cisco VNI).
                    </p> 

                    <h1>
                        La oficina que trabaja con el mismo esfuerzo que usted
                    </h1> 
                    <p className="techSectionText">
                        Con un solo clic y arrastre del mouse, obtenga todo el efecto de la
                        experiencia de las redes empresariales Cisco en esta panorámica de
                        360°. Vea qué es lo que ocurre detrás de escena en una oficina.
                    </p>
                    <h1>Necesito</h1>
                    <h3 className="techSectionText">Acelerar las implementaciones de Wi-Fi</h3>
                    <p className="techSectionText">
                        Obtener tecnología inalámbrica de clase empresarial para la empresa
                        en crecimiento.
                    </p> 
                    <ul className="techSectionText">
                        <li>Ir a Mobility Express.</li>
                    </ul>

                    <h3 className="techSectionText">Conectarme con mis clientes</h3>
                    <p className="techSectionText">
                        Ofrecer experiencias personalizadas basadas en la ubicación.
                    </p> 
                    <ul className="techSectionText">
                        <li>Ver qué hace CMX.</li>
                    </ul>

                    <h3 className="techSectionText">Ofrecer acceso de gran seguridad</h3>
                    <p className="techSectionText">
                        Brinde acceso a la red en minutos a cualquier usuario y aplicación, sin
                        comprometer la seguridad.
                    </p> 
                    <ul className="techSectionText">
                        <li>Explorar SD-Access.</li>
                    </ul>

                    <h1>No se quede atrás</h1>
                    <p className="techSectionText">
                        La tecnología cambia todos los días y usted también debe hacerlo. Su red
                        actual no ofrecerá el rendimiento necesario cuando se conecten dispositivos
                        móviles más nuevos y rápidos, con aplicaciones que consumen gran ancho
                        de banda. Vea cómo mantenerse un paso delante.
                    </p>

                    <h1 >Productos</h1>

                    <ul className="techSectionText">
                        <li>Puntos de acceso para interiores.</li>
                        <li>Puntos de acceso industriales y para exteriores.</li>
                        <li>Controladores LAN inalámbricos.</li>
                        <li>Puntos de acceso administrados de la nube.</li>
                        <li>Análisis y aseguramiento de Cisco DNA.</li>
                        <li>Cisco DNA Center.</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default WirelessNetwork;