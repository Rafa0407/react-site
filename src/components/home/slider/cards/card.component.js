import React, { Component } from "react";
import { Column, Row } from 'simple-flexbox'; 


import '../cards/card.style.css';  


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
              <p  className="textInfo">{ this.props.card.slideParagraph }</p>
              <a href= { this.props.card.linkTo }  className="btn">{ this.props.card.btnText }</a>
           </div>
          </Column>
          <Column alignItems='center'className="imageContainer">
              <img alt="slideImage" className="slideImage" src={ this.props.card.sliderImage }/>
          </Column>
        </Row>
      </div>
    )
  }

}
export default Card;