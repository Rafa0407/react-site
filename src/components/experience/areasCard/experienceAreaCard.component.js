import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import '../areasCard/experienceAreas.style.css'; 

class ExpAreasCard extends Component {
    render(){
        return(
            <div style={{ background: this.props.expAreasInfo.backgroundColor}} className="expAreasContainer">
                 <h1>{this.props.expAreasInfo.title}</h1>
            </div>
        );
    }
}
export default ExpAreasCard;

/*
             <HashLink  smooth className="ExphBtn" to={this.props.expAreasInfo.link}>
                 <h1>{this.props.expAreasInfo.title}</h1>
              </HashLink > 
 */