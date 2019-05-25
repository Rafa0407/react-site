import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './App.css';

import NavBar from './components/navbar/NavBar.component' ;
import TechComponent from './components/tech/techContainer.component';

class App extends Component {
  render() {
    console.log(this.props.location);
    return (
      <div className="App">
        {
          this.props.location.pathname === '/' ? <NavBar /> : <TechComponent />
        }
      </div>
    );
  }
}

export default withRouter(App);
/*return (
  <div className="App">
    {
      this.props.location.pathname == '/' ? <NavBar /> : <TechComponent />
    }
  </div>
);*/