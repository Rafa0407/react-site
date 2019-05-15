/*Core imports */
import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/*Style imports*/
import '../navbar/NavBar.style.css';
import HomeComponent from "../home/home.component";
import ContactComponent from '../contact/contact.component';
import ExperienceComponent from '../experience/experience.component';
import TechComponent from '../tech/technologies.component';
import notFound from '../notFound/notFound.component'

/*External impots*/
import Logo from '../../../public/images/Logo1.png'

class NavBar extends Component {
    render() {
        return (
            <Router>
                <div className="logoContainer">
                    <Link to="/">
                        <img  alt="logo" src={Logo} className="menuLogo"></img>
                    </Link>
                </div>
                <div className="topnav">
                    <Link to="/" className="linkTo" >Inicio </Link>
                    <a href="#tech" className="linkTo">Tecnologías</a>
                    <a  href="#experience" className="linkTo" >Experiencia</a>
                    <a  href="#contacus" className="linkTo" >Contácto</a>
                </div>
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route exact path="/tech" component={TechComponent} />
                    <Route component={notFound} />
                </Switch>
            </Router>

        );
    }

};

export default NavBar;