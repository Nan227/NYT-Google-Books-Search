import React, { Component } from 'react';
import Nav from "./components/Nav";
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <Nav score = {10} topScore = {100} />
      </div>
    );
  }
}

export default App;
