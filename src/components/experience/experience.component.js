import React, { Component } from "react";
import "../experience/experience.style.css";
import * as cons from "../../constants/index";
import ExpAreasCard from "./areasCard/experienceAreaCard.component";

class Experience extends Component {
  render() {
    return (
      <section className="experienceSection" id="experience">
        <div className="experienceHeader">
          <h1>Experiencia</h1>
          <p>
            Entendemos la transformación digital como una estrategia sostenible,
            inteligente y capaz de cambiar una organización a través de la
            tecnología.
          </p>
        </div>
        <div>
          <ul className="cardExperienceContainer">
            {cons.experienceAreas.map((expCards, index) => (
              <li className="expCard-item" key={expCards.title + "-" + index}>
                <ExpAreasCard expAreasInfo={expCards} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default Experience;
