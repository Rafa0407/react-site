import React, { Component } from "react";
import { Column, Row } from 'simple-flexbox'; 
import { HashLink } from 'react-router-hash-link';

import '../cards/card.style.css';  


class Card extends Component {
  render() {
      if(this.props.card.linkTo !== "tel:+50622342682"){
        return (
          <div>
            <Row  onLarge="row" onMedium='column' onSmall='column' className="cardContainer">
              <Column alignItems='center' className="buttomContainer">
               <div>
                  <p  className="textInfo">{ this.props.card.slideParagraph }</p>
                  <HashLink smooth to={ this.props.card.linkTo } className="btn" >{ this.props.card.btnText }</HashLink>
               </div>
              </Column>
              <Column alignItems='center' className="imageContainer">
                  <img alt="slideImage" className="slideImage" src={ this.props.card.sliderImage }/>
              </Column>
            </Row>
          </div>
        );
      }
      else{
        return (
          <div>
            <Row  flex onLarge="row" onMedium='column' onSmall='column' className="cardContainer">
              <Column flex onMedium='row' onSmall='row' alignItems='center' className="buttomContainer">
               <div>
                  <p  className="textInfo">{ this.props.card.slideParagraph }</p>
                  <a  href={ this.props.card.linkTo } className="btn" >{ this.props.card.btnText }</a>
               </div>
              </Column>
              <Column  flex onMedium='row' onSmall='row' alignItems='center' className="imageContainer">
                  <img alt="slideImage" className="mapImage" src={ this.props.card.sliderImage }/>
              </Column>
            </Row>
          </div>
        );
      }
  }

}
export default Card;