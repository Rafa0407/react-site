/*Core imports */
import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
/*Style imports*/
import '../navbar/NavBar.style.css';

/*Components*/
import HomeComponent from "../home/home.component";
import TechComponent from '../tech/techContainer.component';
import notFound from '../notFound/notFound.component'; 
import ExperienceInformation from '../experienceInformation/experienceInformation.component';
import LandingComponent from '../landing/'


/*External imports*/
import Logo from '../../../public/images/Logo1.png'

class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="navBarContainer">
                    <div className="logoContainer">
                        <HashLink smooth  to="/#home">
                                <img  alt="logo" src={Logo} className="menuLogo"></img>
                        </HashLink>
                    </div>
                    <div className="topnav"> 
                        <HashLink smooth to="/#home" className="linkTo" >Inicio</HashLink>
                        <HashLink smooth to="/#tech" className="linkTo" >Tecnologías</HashLink>
                        <HashLink smooth to="/#experience" className="linkTo">Experiencia</HashLink>
                        <HashLink smooth to="/#contactus" className="linkTo">Contacto</HashLink>
                        <HashLink smooth to="/landing" className="linkTo" target="_blank">Landing</HashLink>
                    </div>
                </div>
                <Switch>
                    <Route exact={true} path="/" component={HomeComponent} />
                    <Route path="/tech" component={TechComponent} />
                    <Route path="/experience" component={ExperienceInformation} />
                    <Route path="/landing" component={LandingComponent} />
                    <Route component={notFound} />
                </Switch>
            </div>
        );
    }
};
export default withRouter(NavBar);
