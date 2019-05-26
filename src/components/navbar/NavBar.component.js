/*Core imports */
import React, { Component } from 'react';
import { NavLink, Switch, Route, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
/*Style imports*/
import '../navbar/NavBar.style.css';

/*Components*/
import HomeComponent from "../home/home.component";
import TechComponent from '../tech/techContainer.component';
import notFound from '../notFound/notFound.component'; 




/*External imports*/
import Logo from '../../../public/images/Logo1.png'

class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="navBarContainer">
                    <div className="logoContainer">
                        <NavLink activeClassName="activeNav" to="/">
                                <img  alt="logo" src={Logo} className="menuLogo"></img>
                        </NavLink>
                    </div>
                    <div className="topnav"> 

                        <HashLink smooth to="/#home" className="linkTo" >Inicio</HashLink>
                        <HashLink smooth to="/#tech" className="linkTo" >Tecnologías</HashLink>
                        <HashLink smooth to="/#experience" className="linkTo">Experiencia</HashLink>
                        <HashLink smooth to="/#contactus" className="linkTo">Contácto</HashLink>

                    </div>
                </div>
                <Switch>
                    <Route exact={true} path="/" component={HomeComponent} />
                    <Route path="/tech" component={TechComponent} />
                    <Route component={notFound} />
                </Switch>
            </div>
        );
    }
};
export default withRouter(NavBar);


/* 
                        <a href={`${this.props.location.pathname}#home`} className="linkTo" >Inicio </a>
                        <a href={`${this.props.location.pathname}#tech`} className="linkTo">Tecnologías</a>
                        <a href={`${this.props.location.pathname}#experience`} className="linkTo" >Experiencia</a>
                        <a href={`${this.props.location.pathname}#contactus`} className="linkTo" >Contácto</a>
*/
