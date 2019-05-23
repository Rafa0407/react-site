import React, { Component } from "react";
import '../tech-preview/tech-preview.style.css';
import TechCard from './tech-card/tech-card.component';

/*Cards images*/
import redes from '../../../public/images/logo-world.png';
import seguridad from '../../../public/images/logo-candado.png';
import nube from '../../../public/images/logo-nube.png';
import consultoria from '../../../public/images/logo-grafico.png';
import colaboracion from '../../../public/images/logo-de-manos.png';
import datos from '../../../public/images/logo-de-unidad.png';
import redesInhalambricas from '../../../public/images/logo-de-señal.png';

class TechPreview extends Component {
    render = () => {
        let techCards = [
            {
                image: redes,
                title: "Redes",
                pharagrap: "Basadas en intención y creadas a partir de Cisco DNA.",
                cardLink: "/tech/network"
            },
            {
                image: seguridad,
                title: "Seguridad",
                pharagrap: "Detecte y detenga las amenazas de manera más eficaz con nuestros productos de ciberseguridad.",
                cardLink: "/tech/security"
            },
            {
                image: nube,
                title: "Nube",
                pharagrap: "Posibilite un mundo multinube.",
                cardLink: "/tech/cloud"
            },
            {
                image: consultoria,
                title: "Consultoría avanzada",
                pharagrap: "Posibilite un mundo multinube.",
                cardLink: "/tech/consulting"
            },
            {
                image: colaboracion,
                title: "Colaboración",
                pharagrap: "Las nuevas innovaciones que cambian la forma en que colaboran los equipos",
                cardLink: "/tech/colaboration"
            },
            {
                image: datos,
                title: "Centro de redes",
                pharagrap: "Activado por metas. Informado por contexto. Proporcionado en múltiples nubes.",
                cardLink: "/tech/networkCenter"
            },
            {
                image: redesInhalambricas,
                title: "Redes inalámbricas y movilidad",
                pharagrap: "Viaje al pasado con DNA Center Assurance.",
                cardLink: "/tech/wirlessNetwork"
            }
        ]
        return (
            <section className="techPreviewSection" id="tech">
                <ul className="techContainer">
                        {techCards.map((cards, index) =>
                            <li className="tech-item" key={cards.title + "-" + index}><TechCard techCardInfo={cards} /></li>
                        )} 
                </ul>
            </section>
        )
    }
}

export default TechPreview;