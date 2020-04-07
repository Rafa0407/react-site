import React, { Component } from 'react';
import '../experience/experience.style.css';

import ExpAreasCard from './areasCard/experienceAreaCard.component';

class Experience extends Component {
  render() { 

    let experienceAreas = [
      {
        title: 'Salud', 
        backgroundColor: '#e0e0e0', 
        link: "/experience#Salud"
      },
      {
        title: 'Hotelería', 
        backgroundColor: '#f0c936', 
        link: "/experience#Hotelería"
      },
      {
        title: 'Agro', 
        backgroundColor: '#3e6aaf',
        link: "/experience#Agro"
      },
      {
        title: 'Banca', 
        backgroundColor: '#f74f68',
        link: "/experience#Banca"
      },
      {
        title: 'Alimentos', 
        backgroundColor: '#e0e0e0',
        link: "/experience#Alimentos"
      },
      {
        title: 'Construcción', 
        backgroundColor: '#f0c936',
        link: "/experience#Construcción"
      },
      {
        title: 'Oficinas', 
        backgroundColor: '#f74f68',
        link: "/experience#Oficinas"
      },
      {
        title: 'Manufactura', 
        backgroundColor: '#e0e0e0',
        link: "/experience#Manufactura"
      },
      {
        title: 'Gobierno', 
        backgroundColor: '#f0c936',
        link: "/experience#Gobierno"
      },
      {
        title: 'Retail', 
        backgroundColor: '#3e6aaf',
        link: "/experience#Retail"
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
