import React, { Component } from "react";
import ExpSection from "../experienceInformation/experienceSection/experienceSection.component";

import "../experienceInformation/experienceInformation.style.css";
import Logo from "../../../public/images/Logo1.png";
import example from "../../../public/images/example.jpg";

import salud from "../../../public/images/salud.png";
import retail from "../../../public/images/retail.png";
import oficinas from "../../../public/images/oficinas.png";
import manufactura from "../../../public/images/manufactura.png";
import hoteleria from "../../../public/images/hoteleria.png";
import gobierno from "../../../public/images/gobierno.png";
import consctrucción from "../../../public/images/consctrucción.png";
import banca from "../../../public/images/banca.png";
import alimentos from "../../../public/images/alimentos.png";
import agronomia from "../../../public/images/agronomia.png";


class ExperienceInformation extends Component {
  render() {
    const experienceCards = [
      {
        title: "Salud",
        backgroundColor: "#3e6aaf",
        image: salud,
        text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,",
        brandImgs: [
          {
            image: example, 
            title: "titleExample2"
          },
          {
            image: example, 
            title: "titleExample2"
          },
          {
            image: example, 
            title: "titleExample3"
          },
          {
            image: example, 
            title: "titleExample4"
          },
          {
            image: example, 
            title: "titleExample5"
          }
        ]
      },
      {
        title: "Hotelería",
        backgroundColor: "#e0e0e0",
        image: hoteleria,
        text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,",
        brandImgs: [
          {
            image: example, 
            title: "titleExample2"
          },
          {
            image: example, 
            title: "titleExample2"
          },
          {
            image: example, 
            title: "titleExample3"
          },
          {
            image: example, 
            title: "titleExample4"
          },
          {
            image: example, 
            title: "titleExample5"
          }
        ]
      },
      {
        title: "Agro",
        backgroundColor: "#f0c936",
        image: agronomia,
        text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,",
        brandImgs: [
          {
            image: example, 
            title: "titleExample2"
          },
          {
            image: example, 
            title: "titleExample2"
          },
          {
            image: example, 
            title: "titleExample3"
          },
          {
            image: example, 
            title: "titleExample4"
          },
          {
            image: example, 
            title: "titleExample5"
          }
        ]
      },
      {
        title: "Banca",
        backgroundColor: "#f74f68",
        image: banca,
        text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,",
        brandImgs: [
          {
            image: example, 
            title: "titleExample2"
          },
          {
            image: example, 
            title: "titleExample2"
          },
          {
            image: example, 
            title: "titleExample3"
          },
          {
            image: example, 
            title: "titleExample4"
          },
          {
            image: example, 
            title: "titleExample5"
          }
        ]
      },
      {
        title: "Alimentos",
        backgroundColor: "#e0e0e0",
        image: alimentos,
        text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,",
        brandImgs: [
          {
            image: example, 
            title: "titleExample2"
          },
          {
            image: example, 
            title: "titleExample2"
          },
          {
            image: example, 
            title: "titleExample3"
          },
          {
            image: example, 
            title: "titleExample4"
          },
          {
            image: example, 
            title: "titleExample5"
          }
        ]
      },
      {
        title: "Construcción",
        backgroundColor: "#f0c936",
        image: consctrucción,
        text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,",
        brandImgs: [
          {
            image: example, 
            title: "titleExample2"
          },
          {
            image: example, 
            title: "titleExample2"
          },
          {
            image: example, 
            title: "titleExample3"
          },
          {
            image: example, 
            title: "titleExample4"
          },
          {
            image: example, 
            title: "titleExample5"
          }
        ]
      },
      {
        title: "Oficinas",
        backgroundColor: "#f74f68",
        image: oficinas,
        text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,",
        brandImgs: [
          {
            image: example, 
            title: "titleExample2"
          },
          {
            image: example, 
            title: "titleExample2"
          },
          {
            image: example, 
            title: "titleExample3"
          },
          {
            image: example, 
            title: "titleExample4"
          },
          {
            image: example, 
            title: "titleExample5"
          }
        ]
      },
      {
        title: "Manufactura",
        backgroundColor: "#e0e0e0",
        image: manufactura,
        text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,",
        brandImgs: [
          {
            image: example, 
            title: "titleExample2"
          },
          {
            image: example, 
            title: "titleExample2"
          },
          {
            image: example, 
            title: "titleExample3"
          },
          {
            image: example, 
            title: "titleExample4"
          },
          {
            image: example, 
            title: "titleExample5"
          }
        ]
      },
      {
        title: "Gobierno",
        backgroundColor: "#f0c936",
        image: gobierno,
        text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,",
        brandImgs: [
          {
            image: example, 
            title: "titleExample2"
          },
          {
            image: example, 
            title: "titleExample2"
          },
          {
            image: example, 
            title: "titleExample3"
          },
          {
            image: example, 
            title: "titleExample4"
          },
          {
            image: example, 
            title: "titleExample5"
          }
        ]
      },
      {
        title: "Retail",
        backgroundColor: "#3e6aaf",
        image: retail,
        text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,",
        brandImgs: [
          {
            image: example, 
            title: "titleExample2"
          },
          {
            image: example, 
            title: "titleExample2"
          },
          {
            image: example, 
            title: "titleExample3"
          },
          {
            image: example, 
            title: "titleExample4"
          },
          {
            image: example, 
            title: "titleExample5"
          }
        ]
      },
    ];
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
          {experienceCards.map((item, key) => (
            <ExpSection key={key} ExpCard={item}></ExpSection>
          ))}
        </div>
      </div>
    );
  }
}
export default ExperienceInformation;