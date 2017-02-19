import React, { Component } from 'react';

import UserProfile from './UserProfile'
import Menu from './Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
