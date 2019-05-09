import React, { Component } from "react";
import { Column, Row } from 'simple-flexbox'; 


import '../cards/card.style.css'; 
import slider1 from '../../../../../public/images/slider1.png'
class Card extends Component {
  render() {
    return (
      <div>
        <Row vertical='center'>
          <Column flexGrow={1} flexhorizontal='center'>
            <h3 className="textInfo"> Vinet es el socio tecnológico para potenciar la transformación digital, en su compañía. </h3>
            <button className="btn1">Sucsess Team</button>
          </Column>
          <Column flexGrow={2} >
            <img alt="slide1Image" className="slideImage" src={ slider1 }/>
          </Column>
        </Row>
      </div>
    )
  }

}
export default Card;