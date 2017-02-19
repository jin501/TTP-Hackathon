import React, { Component } from 'react';
import Track from './Track'

class UserProfile extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return (
      <div className="flex-item">
        <Track />
      </div>
    )
  }
}

export default UserProfile;
