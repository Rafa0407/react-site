import React, { Component } from "react";
import ExpSection from "../experienceInformation/experienceSection/experienceSection.component";
import * as cons from '../../constants/index';

import "../experienceInformation/experienceInformation.style.css";
import Logo from "../../../public/images/Logo1.png";


class ExperienceInformation extends Component {
  render() {
    return (
      <div>
        <section className="expInfoSection" id="expInfo">
          <a href="/ ">
            <img alt="logoVinet" className="expHeaderImg" src={Logo} />
          </a>
          <div className="expHeader">
            <h1>Experencia</h1>
            <p>
              Entendemos la transformación digital como una estrategia
              sostenible, inteligente y capaz de cambiar una organización a
              través de la tecnología.
            </p>
          </div>
        </section>
        <div>
          {cons.experienceCards.map((item, key) => (
            <ExpSection key={key} ExpCard={item}></ExpSection>
          ))}
        </div>
      </div>
    );
  }
}
export default ExperienceInformation;