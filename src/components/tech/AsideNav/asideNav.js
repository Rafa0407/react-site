import React, {Component} from 'react'; 
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './asideNav.style.css'; 

/*Components*/ 
import Security from '../security/security.component'; 

import redes from '../../../../public/images/logo-world.png';
import seguridad from '../../../../public/images/logo-candado.png';
import nube from '../../../../public/images/logo-nube.png';
import consultoria from '../../../../public/images/logo-grafico.png';
import colaboracion from '../../../../public/images/logo-de-manos.png';
import datos from '../../../../public/images/logo-de-unidad.png';
import redesInhalambricas from '../../../../public/images/logo-de-señal.png';

class AsideNav extends Component {
    render(){
        return(
            <Router>
                <div className="asideContainer">
                    <div className="asideNav">
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
                                <p>Colaboracion</p>
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