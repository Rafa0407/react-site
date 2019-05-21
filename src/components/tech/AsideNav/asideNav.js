import React, {Component} from 'react'; 
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './asideNav.style.css'; 

/*Components*/ 

import Security from '../security/security.component'; 

/*Images*/
import redes from '../../../../public/images/logo-world.png';
import seguridad from '../../../../public/images/logo-candado.png';
import nube from '../../../../public/images/logo-nube.png';
import consultoria from '../../../../public/images/logo-grafico.png';
import colaboracion from '../../../../public/images/logo-de-manos.png';
import datos from '../../../../public/images/logo-de-unidad.png';
import redesInhalambricas from '../../../../public/images/logo-de-señal.png'; 
import logo from '../../../../public/images/logo-2.png'; 

class AsideNav extends Component {
    constructor(props) {
        super(props);
        this.showNav = this.showNav.bind(this);
      }
      display = false; 
      showNav(){
          console.log(this.display); 
          console.log('clicked!'); 
          this.display = true; 
          console.log(this.display);
    }
    render(){
        let navBarContainer = {
            display: 'none'
        };

        if(this.display = true){
            navBarContainer = {
                display: 'none'
            };
        }
        else {
            navBarContainer = {
                display: 'none'
            };
        }
        return(
            <Router>
                <div className="asideContainer">
                    <div className="asideNav">
                        <a className="asideBtn" onClick={this.showNav} href="/ " >
                            <div  className="asideItems">
                                <img alt="asideImage" className="asideImage" src={logo}></img>
                                <p>Inicio</p>
                            </div>
                        </a > 
                        <Link to="/tech/security">
                            <div className="asideItems">
                                <img alt="asideImage" className="asideImage" src={seguridad}></img>
                                <p>Security</p>
                            </div>
                        </Link> 
                        <Link to="/tech/security">
                            <div className="asideItems">
                                <img alt="asideImage" className="asideImage" src={nube}></img>
                                <p>Nube</p>
                            </div>
                        </Link> 
                        <Link to="/tech/security">
                            <div className="asideItems">
                                <img alt="asideImage" className="asideImage" src={colaboracion}></img>
                                <p>Colaboración</p>
                            </div>
                        </Link> 
                        <Link to="/tech/security">
                            <div className="asideItems">
                                <img alt="asideImage" className="asideImage" src={datos}></img>
                                <p>Centro de redes</p>
                            </div>
                        </Link> 
                        <Link to="/tech/security">
                            <div className="asideItems">
                                <img alt="asideImage" className="asideImage" src={redesInhalambricas}></img>
                                <p>Redes inhalambricas</p>
                            </div>
                        </Link> 
                        <Link to="/tech/security">
                            <div className="asideItems">
                                <img alt="asideImage" className="asideImage" src={redes}></img>
                                <p>Redes</p> 
                            </div>
                        </Link> 
                        <Link to="/tech/security">
                            <div className="asideItems">
                                <img alt="asideImage" className="asideImage" src={consultoria}></img>
                                <p>Consultoria</p>  
                            </div>
                        </Link> 
                    </div>
                </div>
                <Switch>   
                    <Route path={"/tech/security"} component={Security} />
                </Switch>
            </Router>
        );
    }
}
export default AsideNav;