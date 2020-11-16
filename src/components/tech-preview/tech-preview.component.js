import React, { Component } from "react";
import "../tech-preview/tech-preview.style.css";
import TechCard from "./tech-card/tech-card.component";
import * as cons from '../../constants/index';


class TechPreview extends Component {
  render = () => {

    return (
      <section className="techPreviewSection" id="tech">
        <ul className="techContainer">
          {" "}
          {cons.techCards.map((cards, index) => (
            <li className="tech-item" key={cards.title + "-" + index}>
              {" "}
              <TechCard techCardInfo={cards} />
            </li>
          ))}
        </ul>
      </section>
    );
  };
}

export default TechPreview;
