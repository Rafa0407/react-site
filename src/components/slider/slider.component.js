import React, { Component } from "react";
import Slider from "react-slick";
import { HashLink } from "react-router-hash-link";
import "../slider/slider.style.css";
import * as cons from "../../constants";
/*External imports */
// import Card from './cards/card.component';

class SlideShow extends Component {
  render = () => {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      adaptiveHeight: true
    };

    return (
      <section className="sliderSection" id="home">
        <Slider {...settings}>
          {cons.sliderCards.map((item, key) => (
            <div className="sliderContainer" key={key}>
              <React.Fragment>
                <div className="sliderCardText">
                  <p className="textInfo">{item.slideParagraph}</p>
                  <div className="btnContainer">
                  {
                    item.linkTo !== "tel:+50622342682" ? 
                    <HashLink smooth to={item.linkTo} className="btn">
                        {item.btnText}
                    </HashLink>
                    : 
                    <a  href={ item.linkTo } className="btn" >{ item.btnText }</a>
                  }

                  </div>
                </div>
                <div className="sliderCardImage">
                  <img
                    alt={`slider-${item.btnText}-${key}`}
                    className="slideImage"
                    src={item.sliderImage}
                  />
                </div>
              </React.Fragment>
            </div>
          ))}
        </Slider>
      </section>
    );
  };
}

export default SlideShow;

/*
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
 */
