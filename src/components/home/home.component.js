import React, { Component } from "react";

/*Styles */
import './home.style.css';

/*components */
import Slider from './slider/slider.component';
import TechPreview from '../tech-preview/tech-preview.component';
import Experience from '../experience/experience.component';
import Custommers from '../custumers/custommers.component';

class HomeComponent extends Component {
  render() {
    return (
          <div>
            <Slider />
            <TechPreview />
            <Experience />
            <Custommers />
          </div>
    )
  }
}
export default HomeComponent;