/*Core imports */
import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/*Style imports*/
import '../navbar/NavBar.style.css';

/*Components*/
import HomeComponent from "../home/home.component";
import TechComponent from '../tech/tech/technologies.component';
import notFound from '../notFound/notFound.component'; 




/*External imports*/
import Logo from '../../../public/images/Logo1.png'

class NavBar extends Component {
    render() {
        return (
            <Router>
                <div className="navBarContainer">
                    <div className="logoContainer">
                        <Link to="/">
                                <img  alt="logo" src={Logo} className="menuLogo"></img>
                        </Link>
                    </div>
                    <div className="topnav">
                        <a href="#home" className="linkTo" >Inicio </a>
                        <a href="#tech" className="linkTo">Tecnologías</a>
                        <a  href="#experience" className="linkTo" >Experiencia</a>
                        <a  href="#contactus" className="linkTo" >Contácto</a>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route path="/tech/security" component={TechComponent} />
                    <Route component={notFound} />
                </Switch>
            </Router>
        );
    }
};
export default NavBar;