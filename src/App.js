import React, { Component } from 'react';

import UsingComponent from './1_use_props_children/UsingComponent';
import AnotherUsingComponent from './1_use_props_children/AnotherUsingComponent';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsingComponent />
        <AnotherUsingComponent />

        <hr />
      </div>
    );
  }
}

export default App;
