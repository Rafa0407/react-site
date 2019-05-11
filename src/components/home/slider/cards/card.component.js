import React, { Component } from "react";
import { Column, Row } from 'simple-flexbox'; 


import '../cards/card.style.css';  
import slider1 from '../../../../../public/images/slider1.png' 

class Card extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Row className="cardContainer">
          <Column onMedium="column" onSmall="column" alignItems='center' className="buttomContainer">
           <div>
              <p  className="textInfo">{this.props.slideParagraph}</p>
              <button className="btn">{this.props.btnText}</button>
           </div>
          </Column>
          <Column alignItems='center'className="imageContainer">
              <img alt="slideImage" className="slideImage" src={ this.props.sliderImage }/>
          </Column>
        </Row>
      </div>
    )
  }

}
export default Card;