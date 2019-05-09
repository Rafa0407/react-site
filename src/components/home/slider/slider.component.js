import React, { Component } from "react";
import { Column, Row } from 'simple-flexbox';

import '../slider/slider.style.css';

/*External imports */
import Card from './cards/card.component';


class Slider extends Component {
    // slider functions  

    render = () => {
        return (
            <div >
                <div className="slideshow-container">


                    <a className="prev" >&#10094;</a>

                    <a className="next" >&#10095;</a>

                    <div className="dotUbication">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <Card />


            </div>

        )
    }
}

export default Slider;