import React, { Component } from 'react';
import './App.css';

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
