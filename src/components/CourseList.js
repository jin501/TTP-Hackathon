import React, { Component } from 'react';
import CourseItem from './CourseItem'

class CourseList extends Component {
  render(){
    return (
      <div className="CourseList">
        <CourseItem />
      </div>
    )
  }
}

export default CourseList;
