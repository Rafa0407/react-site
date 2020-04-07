import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './App.css';

import NavBar from './components/navbar/NavBar.component' ;
import TechComponent from './components/tech/techContainer.component';
import ExpComponent from './components/experienceInformation/experienceInformation.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          this.props.location.pathname === '/' ? <NavBar /> :
          this.props.location.pathname === '/experience' ? <ExpComponent/> : <TechComponent /> 
        }
      </div>
    );
  }
}
export default withRouter(App);
