import React, { Component } from 'react';
import CourseList from './CourseList'

class UserProfile extends Component {
  constructor(){
    super();
    this.state = {
      user: {
        name: '',
        username: '',
      },
      course: {
        
      }
    }
  }
  render(){
    return (
      <div className="UserProfile">
        <CourseList />
      </div>
    )
  }
}

export default UserProfile;
