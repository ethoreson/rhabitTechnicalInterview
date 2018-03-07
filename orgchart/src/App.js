import React, { Component } from 'react';
import './App.css';
import HierarchyMap from './components/HierarchyMap';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HierarchyMap />
      </div>
    );
  }
}

export default App;