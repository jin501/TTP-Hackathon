import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import UserProfile from './UserProfile'
import Navbar from './Navbar'
import Header from './course/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Container fluid className='main-container'>
          <Header />
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default App;
