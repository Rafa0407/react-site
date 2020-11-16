import React, { Component } from 'react';
import './network.style.css'

class Accordion extends Component {

    render() {
        return (
            <div className="accordion">

                <div className="option">
                    <input type="checkbox" id="toggle1" className="toggle" />
                    <label className="title" for="toggle1">
                        DESCUBRA LAS 6 RAZONES PARA SER CISCO DNA
                    </label>
                    <div className="content">
                        <p>
                            La ventaja de la red es la primera línea de defensa, donde se aplica la política para
                            determinar quién o qué tiene acceso a su red y detectar actividades sospechosas,
                            incluso en el tráfico cifrado. Solo se necesita una vez para que una violación de
                            datos afecte a su organización. Con tanto potencial para la infiltración, es
                            fundamental contar con una solución confiable para identificar y controlar lo que
                            entra en la red.
                        </p>
                    </div>
                </div>

                <div className="option">
                    <input type="checkbox" id="toggle2" className="toggle" />
                    <label className="title" for="toggle2">
                        DATOS MÁS PROFUNDOS, IDEAS MÁS RÁPIDAS
                    </label>
                    <div className="content">
                        <p>
                            Bien hecho, el borde de la red le ofrece una gran cantidad de conocimientos
                            sobre lo que está sucediendo en su organización. La nueva red, desarrollada
                            por la arquitectura de red digital de Cisco (Cisco DNA), le brinda información
                            detallada sobre sus usuarios, los dispositivos que utilizan y las aplicaciones a
                            las que acceden, todo con la capacidad de aprender y adaptarse a los cambios
                            y necesidades de la red.
                        </p>
                    </div>
                </div>

                <div className="option">
                    <input type="checkbox" id="toggle3" className="toggle" />
                    <label className="title" for="toggle3">
                        LA EVOLUCIÓN DE LA AUTOMATIZACIÓN
                    </label>
                    <div className="content">
                        <p>
                            Más usuarios. Más dispositivos. Más ubicaciones para gestionar. Más de todo significa
                            que la automatización es más crítica que nunca. Diseñe, proporcione y aplique
                            políticas fácilmente a su red. La virtualización de la red lo ayuda a administrar las
                            redes y políticas por tipo de usuario, lo que permite lanzamientos rápidos y
                            detección de amenazas más rápida.  
                        </p>
                    </div>
                </div>

                <div className="option">
                    <input type="checkbox" id="toggle4" className="toggle" />
                    <label className="title" for="toggle4">
                        TRANSFORMAR EXPERIENCIAS MÓVILES
                    </label>
                    <div className="content">
                        <p>
                            Su organización prospera en la conectividad. Cisco es el único proveedor que se une
                            a Apple para ofrecer una mejor experiencia móvil basada en Wi-Fi y roaming
                            optimizados. Con la nueva red, estamos facilitando el control y la mejora de las
                            experiencias de los clientes y empleados.
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Accordion;