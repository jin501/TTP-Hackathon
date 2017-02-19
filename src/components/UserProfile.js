import React, { Component } from 'react';
import CourseList from './CourseList'

class UserProfile extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return (
      <div className="flex-item">
        <CourseList />
      </div>
    )
  }
}

export default UserProfile;
