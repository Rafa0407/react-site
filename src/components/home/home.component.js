import React, { Component } from "react";

/*Styles */
import './home.style.css';

/*components */
import Slider from './slider/slider.component';
import TechPreview from '../tech-preview/tech-preview.component';

class HomeComponent extends Component {
  render() {
    return (
          <div>
            <Slider />
            <TechPreview />
          </div>
    )
  }
}
export default HomeComponent;