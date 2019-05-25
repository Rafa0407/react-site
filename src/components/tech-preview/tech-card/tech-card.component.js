import React, { Component } from "react";
import { Column, Row } from 'simple-flexbox'; 
import { Link } from 'react-router-dom';

import '../tech-card/tech-card.style.css';  


class TechCard extends Component {
  render() {
    return (
        <div>
        <Column alignItems='center' onSmall='column' onMedium='column'  className="techCardContainer">
          <Row alignItems='center' className="techImageContainer">
              <img alt="techCardImage" className="techCardImage" src={ this.props.techCardInfo.image }/>
          </Row>
          <Row alignItems='center' className="techInfoContainer">
           <div>
              <h3 className="techTextInfo"> { this.props.techCardInfo.title }</h3>
              <div className="pharagrapContainer">
                    <p>{ this.props.techCardInfo.pharagrap }</p>
              </div>
              <Link  className="techBtn" to={this.props.techCardInfo.cardLink}>
                  Ver más
              </Link > 
              
           </div>
          </Row>
        </Column>
      </div>
    )
  }

}
export default TechCard;