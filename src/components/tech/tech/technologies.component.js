import React, { Component } from 'react';
import AsideNav from  '../AsideNav/asideNav';

import '../tech/technologies.style.css';

class Technologies extends Component {
  render() {
    return (
      <div id="tech" className="technologiesContainer">
        <AsideNav />
      </div>
      
    );
  }
}

export default Technologies;
