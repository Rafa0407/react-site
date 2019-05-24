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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>

                <div className="option">
                    <input type="checkbox" id="toggle2" className="toggle" />
                    <label className="title" for="toggle2">
                        DATOS MÁS PROFUNDOS, IDEAS MÁS RÁPIDAS
                    </label>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>

                <div className="option">
                    <input type="checkbox" id="toggle3" className="toggle" />
                    <label className="title" for="toggle3">
                        LA EVOLUCIÓN DE LA AUTOMATIZACIÓN
                    </label>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>

                <div className="option">
                    <input type="checkbox" id="toggle4" className="toggle" />
                    <label className="title" for="toggle4">
                        TRANSFORMAR EXPERIENCIAS MÓVILES
                    </label>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Accordion;