import React, { Component } from "react";
import { Column, Row } from 'simple-flexbox';

import '../slider/slider.style.css';

/*External imports */
import Card from './cards/card.component';


class Slider extends Component {
    // slider functions  

    render = () => {
        return (
            <section className="sliderSection1">
                <Column flex>
                    <div className="slideshow-container">

                        <div className="mySlides fade">
                            <Card />
                        </div>
                        <a className="indicator prev" >&#10094;</a>

                        <a className="indicator next" >&#10095;</a>
                            <div alignItems='center' className="dotContainer"> 
                                <div className="dots">
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                            </div>
                </div>
            </Column>
          </section>
               
        )
    }
}

export default Slider;