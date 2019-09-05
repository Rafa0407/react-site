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
import redesInhalambricas from '../../../public/images/logo-de-sennal.png';

class TechPreview extends Component {
    render = () => {
        let techCards = [{
                image: redes,
                title: "Redes",
                pharagrap: "Intuitivas e inteligentes creadas a partir de Cisco DNA.",
                cardLink: "/tech/network"
            },
            {
                image: seguridad,
                title: "Seguridad",
                pharagrap: "Detecte y detenga las amenazas de manera más eficiente con nuestros productos de ciberseguridad.",
                cardLink: "/tech/security"
            },
            {
                image: nube,
                title: "Nube",
                pharagrap: "Aumente la eficiencia operativa y reduzca el costo total de propiedad.",
                cardLink: "/tech/cloud"
            },
            {
                image: consultoria,
                title: "Consultoría personalizada",
                pharagrap: "Basada en necesidades del negocio y tendencias de la industria.",
                cardLink: "/tech/consulting"
            },
            {
                image: colaboracion,
                title: "Colaboración",
                pharagrap: "Las innovaciones tecnológicas que cambian la forma en que se comunican las personas",
                cardLink: "/tech/colaboration"
            },
            {
                image: datos,
                title: "Centro de datos",
                pharagrap: "Iaas, Monitoreo, Capacity Planning, Multicliente.",
                cardLink: "/tech/dataCenter"
            },
            {
                image: redesInhalambricas,
                title: "Redes inalámbricas y movilidad",
                pharagrap: "Movilidad y flexibilidad de espacios de trabajo.",
                cardLink: "/tech/wirlessNetwork"
            }
        ]
        return ( 
        <section className = "techPreviewSection" id = "tech" >
            <ul className = "techContainer" > {
                techCards.map((cards, index) =>
                    <
                    li className = "tech-item"
                    key = { cards.title + "-" + index } > < TechCard techCardInfo = { cards }
                    /></li >
                )
            } </ul>      
        </section>
        )
    }
}

export default TechPreview;