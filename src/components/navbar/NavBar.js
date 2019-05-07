import React, { Component } from 'react';

/*Style imports*/
import '../navbar/NavBar.css'; 


/*External impots*/
import Logo from '../../../public/images/Logo1.png'

class NavBar  extends Component{
    render() {
        return ( 
            <div className="topnav">
              <div>
                  <img src={Logo} className="logoView"></img>
              </div>
              <a>Contácto</a>
              <a>Experiencia</a>
              <a >Tecnologías</a>
              <a >Inicio</a>
            </div>
        );
    }
   
}; 

export default NavBar; 
