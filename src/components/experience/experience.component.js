import React, { Component } from 'react';
import '../experience/experience.style.css';

import ExpAreasCard from './areasCard/experienceAreaCard.component';

class Experience extends Component {
  render() { 

    let experienceAreas = [
      {
        title: 'Salud', 
        backgroundColor: '#e0e0e0'
      },
      {
        title: 'Hotelería', 
        backgroundColor: '#f0c936' 
      },
      {
        title: 'Agro', 
        backgroundColor: '#3e6aaf'
      },
      {
        title: 'Banca', 
        backgroundColor: '#f74f68'
      },
      {
        title: 'Alimentos', 
        backgroundColor: '#e0e0e0'
      },
      {
        title: 'Construcción', 
        backgroundColor: '#f0c936'
      },
      {
        title: 'Oficinas', 
        backgroundColor: '#f74f68'
      },
      {
        title: 'Manufactura', 
        backgroundColor: '#e0e0e0'
      },
      {
        title: 'Gobierno', 
        backgroundColor: '#f0c936'
      },
      {
        title: 'Retail', 
        backgroundColor: '#3e6aaf'
      }
    ]
    return (
        <section className="experienceSection" id="experience">
            <div className="experienceHeader">
              <h1>Experencia</h1> 
              <p>
              Entendemos la transformación digital como una estrategia sostenible, 
              inteligente y capaz de cambiar una organización a través de la tecnología.
              </p>
            </div>
            <div>
              <ul className="cardExperienceContainer">
                          {experienceAreas.map((expCards, index) =>
                              <li className="expCard-item" key={expCards.title + "-" + index}><ExpAreasCard expAreasInfo={expCards} /></li>
                          )} 
              </ul>
            </div>

        </section>
    );
  }
}

export default Experience;
