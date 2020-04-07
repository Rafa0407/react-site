import React, { Component } from 'react';
import '../partnersCard/partnerCard.style.css'; 

class PartnerCard extends Component {
    render(){
        return(
            <div className="partnerImageContainer">
                <img src={this.props.PartnerImage} className="partnerImage"></img>
            </div>
            
        );
    }
}
export default PartnerCard;
