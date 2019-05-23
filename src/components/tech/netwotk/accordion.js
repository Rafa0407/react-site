import React, { Component } from 'react';
import './network.style.css'

class Accordion extends Component {

    render() {
        return (
            <div class="accordion">

                <div class="option">
                    <input type="checkbox" id="toggle1" class="toggle" />
                    <label class="title" for="toggle1">
                        DESCUBRA LAS 6 RAZONES PARA SER CISCO DNA
                    </label>
                    <div class="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox" id="toggle2" class="toggle" />
                    <label class="title" for="toggle2">
                        DATOS MÁS PROFUNDOS, IDEAS MÁS RÁPIDAS
                    </label>
                    <div class="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox" id="toggle3" class="toggle" />
                    <label class="title" for="toggle3">
                        LA EVOLUCIÓN DE LA AUTOMATIZACIÓN
                    </label>
                    <div class="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>

                <div class="option">
                    <input type="checkbox" id="toggle3" class="toggle" />
                    <label class="title" for="toggle3">
                        TRANSFORMAR EXPERIENCIAS MÓVILES
                    </label>
                    <div class="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Accordion;