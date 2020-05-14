
import example from "../../public/images/example.jpg";

/*Experience card image*/
import salud from "../../public/images/salud.png";
import retail from "../../public/images/retail.png";
import oficinas from "../../public/images/oficinas.png";
import manufactura from "../../public/images/manufactura.png";
import hoteleria from "../../public/images/hoteleria.png";
import gobierno from "../../public/images/gobierno.png";
import consctrucción from "../../public/images/consctrucción.png";
import banca from "../../public/images/banca.png";
import alimentos from "../../public/images/alimentos.png";
import agronomia from "../../public/images/agronomia.png";


/*Cards images*/
import redes from "../../public/images/logo-world.png";
import seguridad from "../../public/images/logo-candado.png";
import nube from "../../public/images/logo-nube.png";
import consultoria from "../../public/images/logo-grafico.png";
import colaboracion from "../../public/images/logo-de-manos.png";
import datos from "../../public/images/logo-de-unidad.png";
import redesInhalambricas from "../../public/images/logo-de-sennal.png";

// slider images 

import sliderImage1 from '../../public/images/slider1.png'; 
import sliderImage2 from '../../public/images/slider2.png';  
import sliderImage3 from '../../public/images/slider3.png';  
import sliderImage4 from '../../public/images/slider4.png';  

// changes the experience links later
export const experienceAreas = [
      {
        title: 'Salud', 
        backgroundColor: '#e0e0e0', 
        link: "#"
        //link: "/experience#Salud"

      },
      {
        title: 'Hotelería', 
        backgroundColor: '#f0c936', 
        //link: "/experience#Hotelería"
        link: "#"
      },
      {
        title: 'Agro', 
        backgroundColor: '#3e6aaf',
        //link: "/experience#Agro"
        link: "#"
      },
      {
        title: 'Banca', 
        backgroundColor: '#f74f68',
        // link: "/experience#Banca"
        link: "#"
      },
      {
        title: 'Alimentos', 
        backgroundColor: '#e0e0e0',
        // link: "/experience#Alimentos"
        link: "#"
      },
      {
        title: 'Construcción', 
        backgroundColor: '#f0c936',
        // link: "/experience#Construcción"
        link: "#"
      },
      {
        title: 'Oficinas', 
        backgroundColor: '#f74f68',
        // link: "/experience#Oficinas"
        link: "#"
      },
      {
        title: 'Manufactura', 
        backgroundColor: '#e0e0e0',
        // link: "/experience#Manufactura"
        link: "#"
      },
      {
        title: 'Gobierno', 
        backgroundColor: '#f0c936',
        // link: "/experience#Gobierno"
        link: "#"
      },
      {
        title: 'Retail', 
        backgroundColor: '#3e6aaf',
        // link: "/experience#Retail"
        link: "#"
      }
];

export const sliderCards = [
        {
            slideParagraph: 'Vinet es el socio tecnológico para potenciar la transformación digital en su compañía.', 
            btnText: 'Success Team', 
            sliderImage: sliderImage1, 
            linkTo: '/#partner'
        },
        {
            slideParagraph: 'Su asesor de tecnología en Costa Rica y Nicaragua.', 
            btnText: 'Call', 
            sliderImage: sliderImage2, 
            linkTo: 'tel:+50622342682'
        },
        {
            slideParagraph: 'Experiencia para entregar tecnología segura escalable y sorprendente.', 
            btnText: 'Tecnologías', 
            sliderImage: sliderImage3, 
            linkTo: '/#tech'
        },
        {
            slideParagraph: 'Planificamos, diseñamos e implementamos soluciones sostenibles para la era digital.', 
            btnText: 'Experiencia', 
            sliderImage: sliderImage4,
            linkTo: '/#experience'
        }
]
export const experienceCards = [
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
      }
];

export const techCards = [
      {
        image: redes,
        title: "Redes",
        pharagrap: "Intuitivas e inteligentes creadas a partir de Cisco DNA.",
        cardLink: "/tech/network",
      },
      {
        image: seguridad,
        title: "Seguridad",
        pharagrap:
          "Detecte y detenga las amenazas de manera más eficiente con nuestros productos de ciberseguridad.",
        cardLink: "/tech/security",
      },
      {
        image: nube,
        title: "Nube",
        pharagrap:
          "Aumente la eficiencia operativa y reduzca el costo total de propiedad.",
        cardLink: "/tech/cloud",
      },
      {
        image: consultoria,
        title: "Consultoría personalizada",
        pharagrap:
          "Basada en necesidades del negocio y tendencias de la industria.",
        cardLink: "/tech/consulting",
      },
      {
        image: colaboracion,
        title: "Colaboración",
        pharagrap:
          "Las innovaciones tecnológicas que cambian la forma en que se comunican las personas",
        cardLink: "/tech/colaboration",
      },
      {
        image: datos,
        title: "Centro de datos",
        pharagrap: "Iaas, Monitoreo, Capacity Planning, Multicliente.",
        cardLink: "/tech/dataCenter",
      },
      {
        image: redesInhalambricas,
        title: "Redes inalámbricas y movilidad",
        pharagrap: "Movilidad y flexibilidad de espacios de trabajo.",
        cardLink: "/tech/wirlessNetwork",
      },
];