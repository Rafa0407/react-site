import React, {Component} from 'react'; 

import '../team/team.style.css';

import SuccesTeamCard from '../team/teamCard/team-card.component';

/*Team pictures*/
import Nelson from '../../../public/images/nelson-zunniga.png';
import Diego from '../../../public/images/diego-zunniga.png';
import Julio from '../../../public/images/julio-hong.png';



class SuccesTeam extends Component {
    render(){

        let teamInfo = [
            {
                name: 'Nelson Zúñiga',
                image: Nelson 
            }, 
            {
                name: 'Julio Hong', 
                image: Julio 
            }, 
            {
                name: 'Diego Zúñiga',
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