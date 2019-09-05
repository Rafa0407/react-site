import React, { Component } from 'react';
import '../partners/partners.style.css'; 
import Carousel from 'nuka-carousel';


import '../experience/experience.style.css';

// partners import 
import cisco from '../../../public/images/cisco.jpeg'; 
import citrix from '../../../public/images/citrix.jpeg'; 
import veeam from '../../../public/images/veeam.jpeg'; 
import vmware from '../../../public/images/vmware.jpeg'; 
import purestorage from '../../../public/images/purestorage.jpeg'; 
import dellemc from '../../../public/images/dellemc.jpeg';  
import microsoft from '../../../public/images/microsoft.jpeg';  

class Partners extends Component {
  render() { 

    return (
      <section className="partnerSection" id="partner">
        <div className="partnerHeader"> 
            <h1>Partners</h1> 
        </div>
        <div className="carouselContainer">
         <Carousel  width="100%" cellAlign="center" autoplay="true" speed="2000" slidesToShow="4">
            <img src={cisco}  className="carImg"/>
            <img src={citrix} className="carImg"/>
            <img src={veeam} className="carImg"/>
            <img src={vmware} className="carImg"/>
            <img src={purestorage} className="carImg"/>
            <img src={dellemc} className="carImg"/>
            <img src={microsoft} className="carImg"/>
          </Carousel> 
        </div>
      </section>
    );
  }
}

export default Partners;
