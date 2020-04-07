import React, { Component } from 'react';
import '../partners/partners.style.css'; 
import PartnerCard from '../partners/partnersCard/partnerCard.component';


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
    const partners = [
      {id: 1, image: cisco, name: "Cisco"},
      {id: 2, image: citrix, name: "Citrix"},
      {id: 3, image: veeam, name: "Veam"},
      {id: 4, image: vmware, name: "VMware"},
      {id: 5, image: purestorage, name: "Purestorage"},
      {id: 6, image: dellemc, name: "DELL Emc"},
      {id: 7, image: microsoft, name: "Microsoft"}
    ]; 
    return (
      <section className="partnerSection" id="partner">
        <div className="partnerHeader"> 
            <h1>Partners</h1> 
        </div>
        <div className="partnerCardContainer">
          {
            partners.map((item, key) =>
                <PartnerCard key={key} PartnerImage={item.image}></PartnerCard>
            )
          }
        </div>
      </section>
    );
  }
}

export default Partners;
