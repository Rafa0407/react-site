import React, { Component } from "react";
import Slider from "react-slick";

import '../slider/slider.style.css';

/*External imports */
import Card from './cards/card.component'; 

/*slider images */
import sliderImage1 from '../../../../public/images/slider1.png'; 
import sliderImage2 from '../../../../public/images/slider2.png';  
import sliderImage3 from '../../../../public/images/slider3.png';  
import sliderImage4 from '../../../../public/images/slider4.png';  

class SlideShow extends Component {

    // check the next and prev buttoms 
    render = () => { 

        let card1 = {
            slideParagraph: 'Vinet es el socio tecnológico para potenciar la transformación digital, en su compañía.', 
            btnText: 'Sucsess Team', 
            sliderImage: sliderImage1, 
            linkTo: '/'
        }
        let card2 = {
            slideParagraph: 'Su asesor de tecnología en Costa Rica y Nicaragua.', 
            btnText: 'Call', 
            sliderImage: sliderImage2, 
            linkTo: 'tel:+50622342682'
        }
        let card3 = {
            slideParagraph: 'Experiencia para entregar tecnología segura, escalable y sorprendente.', 
            btnText: 'Tecnologías', 
            sliderImage: sliderImage3, 
            linkTo: '/tech'
        }
        let card4 = {
            slideParagraph: 'Planificamos, diseñamos e implementamos soluciones sostenibles para la era digital.', 
            btnText: 'Experiencia', 
            sliderImage: sliderImage4,
            linkTo: '/'
        }

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            adaptiveHeight: true,
            // autoplay: true,  /*properties for autoplay slideshow, uncomment until work´is fine*/
            // speed: 2000,
            // autoplaySpeed: 2000,
            // pauseOnHover: true,
          }; 
          
        return (
          <section className="sliderSection">
              <Slider {...settings}>
              <div>
                  <Card card={card1}/>
              </div>
              <div>
                  <Card card={card2}/>
              </div>
              <div>
                  <Card card={card3}/>
              </div>
              <div>
                  <Card card={card4}/>
              </div>
            </Slider> 
          </section>

        )
    }
}

export default SlideShow;
