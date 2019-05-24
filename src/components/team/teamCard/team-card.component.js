import React, {Component} from 'react'; 
import '../teamCard/team-card.style.css'; 

class SuccesTeamCard extends Component {
    render(){
        return(
            <div className="teamCards">
                <div className="cardImageContainer">
                    <img alt="teamImage" className="teamCardImage" atl="team" src={ this.props.teamCard.image }></img>
                </div>
                <div className="teamTextContainer">
                    <div className="cardtextItems" >
                        <h3>{ this.props.teamCard.name }</h3>
                        <p> { this.props.teamCard.info } </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default SuccesTeamCard;