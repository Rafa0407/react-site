import React, { Component } from 'react';
import './style/App.css';
import NavBar from './components/navbar/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
      </div>
    );
  }
}

export default App;
