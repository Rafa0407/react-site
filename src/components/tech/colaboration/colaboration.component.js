import React, { Component } from 'react';
import Iframe from 'react-iframe'; 
import '../generalSections.style.css'
import '../colaboration/colaboration.style.css'


import colaboracion from '../../../../public/images/logo-de-manos.png'; 
import webexMeet from '../../../../public/images/icon1.png';
import webexTeam from '../../../../public/images/icon2.png';
import webexBoard from '../../../../public/images/icon3.png';

class Colaboracion extends Component {
    render() {
        return (
            <div className="techSectionContainer">
                <div className="techSectionHeader">
                    <div className="techSectionHeaderImage">
                        <img alt="securityLogo" src={colaboracion} className="techSectionHeaderLogo"></img>
                    </div>
                    <div className="techSectionHeaderText">
                        <h1>Colaboracion</h1>
                        <p>
                            Las últimas innovaciones están cambiando
                            la forma de colaborar en equipo.
                        </p>
                    </div>
                </div>
                <div className="techSectionVideoContainer">
                    <Iframe url="https://www.youtube.com/embed/XzbKaL6e_sw"
                        id="colaborationVideo"
                        className="techSectionVideo"
                        display="inline"
                        allow="fullscreen"
                     />
                </div>
                <div className="techSectionContent">
                    <p className="techSectionText firstParagraph">
                    ¿Trabaja de la misma manera en que lo hacía hace 10 años?
                    Analice cómo evolucionó la forma en la que trabaja. Es posible
                    que ya no trabaje de 9 a 5 y que no trabaje todo el tiempo en
                    la oficina. El trabajo actualmente requiere de colaboración y de
                    la participación de equipos en diversos horarios.
                    </p>
                    <div className="percentagesContainer">
                        <h1 className="percetage">72%</h1>
                        <p className="data">
                            dice que la “comunicación efectiva entre equipos de
                            trabajo” se ha tornado más importante en los últimos dos años.
                        </p>
                    </div>
                    <div className="percentagesContainer">
                        <h1 className="percetage">54%</h1>
                        <p className="data">
                            está invirtiendo en soluciones de colaboración más
                            fáciles de usar.
                        </p>
                    </div>
                    <div className="percentagesContainer">
                        <h1 className="percetage">62%</h1>
                        <p className="data">
                            revela que la colaboración con personas externas a la
                            organización es cada vez más importante.    
                        </p>
                    </div>
                    <h1>
                        Tecnología que prioriza la colaboración
                    </h1> 
                    <p className="techSectionText">Haga que el trabajo sea más intuitivo, con tecnología de colaboración fácil de usar.</p>

                    <h3 className="techSectionText">Comunicaciones unificadas</h3>
                    <p className="techSectionText">Comunicaciones unificadas </p>   
                    <p className="techSectionText">Unifique las aplicaciones móviles, de voz, de video y de datos.</p>

                    <ul className="techSectionText">
                        <li>
                            Cisco Unified Communications Manager.
                        </li>
                        <li>
                            Cisco Business Edition.
                        </li>
                        <li>
                            Todos los productos de comunicaciones unificadas.
                        </li>
                    </ul>

                    <h3 className="techSectionText">Atención al cliente</h3>
                    <p className="techSectionText">Satisfaga a sus clientes con experiencias omnicanal personalizadas.</p>

                    <ul className="techSectionText">
                        <li>Cisco Unified Contact Center Express.</li>
                        <li>Cisco Unified Contact Center Enterprise.</li>
                        <li>Cisco Customer Journey Platform.</li>
                        <li>Todos los productos de atención al cliente.</li>
                    </ul>

                    <h3 className="techSectionText">Terminales de colaboración</h3>
                    <p className="techSectionText">Los galardonados dispositivos de escritorio y sala hacen que la colaboración en línea sea incluso más realista.</p>

                    <ul className="techSectionText">
                        <li>Cisco Webex Board.</li>
                        <li>Familia de productos Cisco Webex Room.</li>
                        <li>Teléfonos IP de Cisco.</li>
                        <li>Todos los productos de terminales.</li>
                    </ul>

                    <h1>Productos destacados</h1>

                    <div className="products">
                        <div className="productsImage">
                            <img alt="colaborationProducto" src={webexMeet} className="productImage"></img>
                        </div>
                        <div className="productsText">
                            <h3>Cisco Webex Meetings</h3>
                            <p>
                            Elimine las complicaciones y el estrés que ocasiona la tecnología de
                            las reuniones, con el servicio más utilizado y confiable del sector.
                            </p>
                            <ul>
                                <li>
                                    Mejore las reuniones.
                                </li>
                            </ul>
                        </div>
                    </div> 

                    <div className="products">
                        <div className="productsImage">
                            <img alt="colaborationProducto" src={webexTeam} className="productImage"></img>
                        </div>
                        <div className="productsText">
                            <h3>Cisco Webex Teams</h3>
                            <p>
                            Permita que los equipos se reúnan, creen y se comuniquen en forma
                            constante en una plataforma única y segura.             
                            </p>
                        </div>
                    </div>

                    <div className="products">
                        <div className="productsImage">
                            <img alt="colaborationProducto" src={webexBoard} className="productImage"></img>
                        </div>
                        <div className="productsText">
                            <h3>Cisco Webex Board</h3>
                            <p>
                            Combine la videoconferencia, la presentación inalámbrica y la pizarra
                            digital, en un solo dispositivo.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}
export default Colaboracion;

