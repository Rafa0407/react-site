import React, {Component} from 'react'; 

import '../team/team.style.css';

import SuccesTeamCard from '../team/teamCard/team-card.component';

/*Team pictures*/
import Nelson from '../../../public/images/nelson-zuñiga.png';
import Diego from '../../../public/images/diego-zuñiga.png';
import Julio from '../../../public/images/julio-hong.png';



class SuccesTeam extends Component {
    render(){

        let teamInfo = [
            {
                name: 'Nelson Zúñiga', 
                info: 'Lorem ipsum dolor sit amet, consectetuer. Adipiscing eli sed diam.', 
                image: Nelson 
            }, 
            {
                name: 'Julio Hong', 
                info: 'Lorem ipsum dolor sit amet, consectetuer. Adipiscing eli sed diam.', 
                image: Julio 
            }, 
            {
                name: 'Diego Zúñiga', 
                info: 'Lorem ipsum dolor sit amet, consectetuer. Adipiscing eli sed diam.', 
                image: Diego 
            }
        ]
        return(
            <section className="succesTeamSection" id="team">
                <div className="teamHeader"> 
                  <h1>Succes Team</h1> 
                </div>
                <div >
                    <div>
                    <ul className="teamCardContainer">
                         {teamInfo.map((teamCards, index) =>
                              <li  key={teamCards.name + "-" + index}><SuccesTeamCard teamCard={ teamCards } /></li>
                          )} 
                    </ul>
                    </div>
                </div>
            </section>
        );
    }
}
export default SuccesTeam;