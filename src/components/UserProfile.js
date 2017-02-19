import React, { Component } from 'react';
import CourseList from './CourseList'

class UserProfile extends Component {
  render(){
    return (
      <div className="UserProfile">
        <CourseList />
      </div>
    )
  }
}

export default UserProfile;
