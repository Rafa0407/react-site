import React, { Component } from 'react';
import '../experienceSection/experienceSection.style.css';

class ExperienceSection extends Component {
  render() {
    console.log(this.props); 
    return (
      <section className="expAreasCard" id={this.props.ExpCard.title}
      >
        <div className="ExpInfoCardHeader">
          <h1 style={{ color: this.props.ExpCard.backgroundColor }}>{this.props.ExpCard.title}</h1>
        </div>
        <div className="ExpInfoCardContent">
          <div className="ExpInfoCardContentText">
            <p>{this.props.ExpCard.text}</p>
          </div>
          <div className="ExpInfoCardContentImg">
            <img src={this.props.ExpCard.image}></img>
          </div>
        </div>
        <div className="brandContainer">
          {this.props.ExpCard.brandImgs.map((item, key) => (
            <img key={key} atl={item.title} className="ExpInfoCardBrand" src={item.image}></img>
          ))}                      
        </div>
      </section>
    );
  }
}
export default ExperienceSection;