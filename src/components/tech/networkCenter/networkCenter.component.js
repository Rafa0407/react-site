import React, { Component } from 'react';
import '../generalSections.style.css'
import '../colaboration/colaboration.style.css'


import netCenter from '../../../../public/images/logo-de-unidad.png'; 
import dataCenterImage from '../../../../public/images/datacenter.png';
class NetworkCenter extends Component {
    render() {
        return (
            <div className="techSectionContainer">
                <div className="techSectionHeader">
                    <div className="techSectionHeaderImage">
                        <img alt="securityLogo" src={netCenter} className="techSectionHeaderLogo"></img>
                    </div>
                    <div className="techSectionHeaderText">
                        <h1>Centro de redes</h1>
                        <p>
                            Construya un centro de datos que se vuelva más
                            inteligente cada día.
                        </p>
                    </div>
                </div>
          
                <div className="videoImageContainer">
                    <a target="_blank" href="https://www.cisco.com/c/en/us/solutions/data-center-virtualization/index.html?socialshare=lightbox-1 ">
                        <img alt="datacenter" className="videoImage" src={dataCenterImage}></img>
                    </a>
                </div>
                <div className="techSectionContent">
                    
                    <h1>Beneficios</h1>
                    <h3 className="techSectionText">Mejore el rendimiento de las aplicaciones</h3>
                    <p className="techSectionText">
                        Ayude a garantizar el rendimiento de las aplicaciones en cualquier
                        dispositivo en todas las ubicaciones.
                    </p>

                    <h3 className="techSectionText">Movilidad sin inconvenientes en múltiples nubes</h3>
                    <p className="techSectionText">
                        Implemente nuevas aplicaciones en todas las ubicaciones de su
                        dominio en múltiples nubes. 
                    </p>

                    <h3 className="techSectionText">Seguridad ubicua</h3>
                    <p className="techSectionText">
                        Proteja las aplicaciones, la infraestructura, los datos, los usuarios y los
                        dispositivos con los análisis y la visibilidad del rendimiento.             
                    </p>

                    <h1>Soluciones empresariales y de aplicaciones</h1> 

                    <ul className="techSectionText">
                        <li>Protección de datos.</li>
                        <li>Datos masivos y análisis.</li>
                        <li>Soluciones de nube privada e híbrida.</li>
                        <li>Aplicaciones SAP, Microsoft y Oracle.</li>
                        <li>Partners de la tecnología de ecosistema.</li>
                        <li>Virtualización de equipos de escritorio.</li>
                        <li>Infraestructura convergente e hiperconvergente.</li>
                        <li>Redes definidas por software.</li>
                        <li>Almacenamiento definido por software.</li>
                    </ul>
                    
                    <h1>Explore los productos</h1> 
                    
                    <h3 className="techSectionText">Redes para centros de datos</h3>

                    <ul className="techSectionText">
                        <li>Cisco ONE para redes de DC.</li>
                        <li>Switching del centro de datos.</li>
                        <li>Redes virtuales.</li>
                        <li>Almacenamiento en red.</li>
                    </ul>

                    <h3 className="techSectionText">Análisis y seguridad</h3>
                    <p className="techSectionText">Analice el 100 % de sus aplicaciones en tiempo real y proteja sus datos y recursos.</p>
                    <ul className="techSectionText">
                        <li>AppDynamics.</li>
                        <li>Análisis de centros de datos.</li>
                        <li>Seguridad del centro de datos.</li>
                    </ul>

                    <h3 className="techSectionText">Automatización y nube híbrida</h3>
                    <p className="techSectionText">
                        Automatice las tareas de TI, acelere la implementación de lasaplicaciones
                         y optimice sus procesos.
                    </p>
                    <ul className="techSectionText">
                        <li>Infraestructura centrada en aplicaciones (ACI).</li>
                        <li>Cisco Intersight.</li>
                        <li>Administrador de la optimización de cargas de trabajo de Cisco.</li>
                        <li>UCS Director.</li>
                        <li>CloudCenter.</li>
                        <li>Enterprise Cloud Suite.</li>
                    </ul>
                    
                </div>
            </div>
        );
    }
}
export default NetworkCenter;
