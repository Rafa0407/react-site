import React, { Component } from 'react';
import './style/App.css';

import HomeComponent from './components/home/home.component';
import NavBar from './components/navbar/NavBar.component' ;

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      
      </div>
    );
  }
}

export default App;
