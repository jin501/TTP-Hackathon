import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import UserProfile from './UserProfile'
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Container fluid className='main-container'>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default App;
