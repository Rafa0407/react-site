import React, { Component } from "react";

/*Styles */
import './home.style.css';
import { Column, Row } from 'simple-flexbox';

/*components */
import Slider from './slider/slider.component';

class HomeComponent extends Component {
  render() {
    return (
      <section className="sliderSection">
        <Column flex>
          <Slider />
        </Column>
      </section>

    )
  }
}
export default HomeComponent;