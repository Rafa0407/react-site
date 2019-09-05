import React, { Component } from "react";
import { NavLink , Switch, Route } from 'react-router-dom';

import './asideNav.style.css'; 

/*Components*/ 
import Security from '../security/security.component'; 
import Colaboration from '../colaboration/colaboration.component';
import Cloud from '../cloud/cloud.component';
import NetworkCenter from '../networkCenter/networkCenter.component';
import WirelessNetwork from '../wirelessNetwork/wirelessNetwork.component';
import Consulting from '../consulting/consulting.component';
import Network from '../netwotk/network.component'; 
import notFound from '../../notFound/notFound.component'; 

/*Images*/
import redes from '../../../../public/images/logo-world.png';
import seguridad from '../../../../public/images/logo-candado.png';
import nube from '../../../../public/images/logo-nube.png';
import consultoria from '../../../../public/images/logo-grafico.png';
import colaboracion from '../../../../public/images/logo-de-manos.png';
import datos from '../../../../public/images/logo-de-unidad.png';
import redesInhalambricas from '../../../../public/images/logo-de-sennal.png'; 
import logo from '../../../../public/images/logo-2.png'; 

 
class AsideNav extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="asideContainer">
                    <div className="asideNav">
                        <a className="asideBtn" onClick={this.showNav} href="/ " >
                            <div  className="asideItems">
                                <img alt="asideImage" className="homeImage" src={logo}></img>
                                <p>Inicio</p>
                            </div>
                        </a > 
                        <NavLink activeClassName="navActive" to="/tech/security">
                            <div className="asideItems">
                                <img alt="asideImage" className="asideImage" src={seguridad}></img>
                                <p> Seguridad </p>
                            </div>
                        </NavLink> 
                        <NavLink activeClassName="navActive" to="/tech/cloud">
                            <div className="asideItems">
                                <img alt="asideImage" className="asideImage" src={nube}></img>
                                <p>Nube</p>
                            </div>
                        </NavLink> 
                        <NavLink activeClassName="navActive" to="/tech/colaboration">
                            <div className="asideItems">
                                <img alt="asideImage" className="asideImage" src={colaboracion}></img>
                                <p>Colaboración</p>
                            </div>
                        </NavLink> 
                        <NavLink activeClassName="navActive" to="/tech/dataCenter">
                            <div className="asideItems">
                                <img alt="asideImage" className="asideImage" src={datos}></img>
                                <p>Centro de redes</p>
                            </div>
                        </NavLink> 
                        <NavLink activeClassName="navActive" to="/tech/wirlessNetwork">
                            <div className="asideItems">
                                <img alt="asideImage" className="asideImage" src={redesInhalambricas}></img>
                                <p>Redes inhalambricas</p>
                            </div>
                        </NavLink> 
                        <NavLink activeClassName="navActive" to="/tech/network">
                            <div className="asideItems">
                                <img alt="asideImage" className="asideImage" src={redes}></img>
                                <p>Redes</p>
                            </div>
                        </NavLink> 
                        <NavLink activeClassName="navActive" to="/tech/consulting">
                            <div className="asideItems">
                                <img alt="asideImage" className="asideImage" src={consultoria}></img>
                                <p>Consultoria</p> 
                            </div>
                        </NavLink> 
                    </div>
                </div>
                <Switch>   
                    <Route path={"/tech/security"} component={Security} />
                    <Route path={"/tech/colaboration"} component={Colaboration} />
                    <Route path={"/tech/cloud"} component={Cloud} />
                    <Route path={"/tech/dataCenter"} component={NetworkCenter} />
                    <Route path={"/tech/wirlessNetwork"} component={WirelessNetwork} />
                    <Route path={"/tech/consulting"} component={Consulting} />
                    <Route path={"/tech/network"} component={Network} />
                    <Route component={notFound} />
                </Switch>
            </React.Fragment>
        );
    }
}
export default AsideNav;