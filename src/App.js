import React, { Component } from 'react';

import UsingComponent from './1_use_props_children/UsingComponent';
import AnotherUsingComponent from './1_use_props_children/AnotherUsingComponent';

import ComponentUsingLeftRight from './2_send_jsx_through_props/ComponentUsingLeftRight';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsingComponent />
        <AnotherUsingComponent />

        <hr />

        <ComponentUsingLeftRight />

        <hr />
      </div>
    );
  }
}

export default App;
