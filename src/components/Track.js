import React, { Component } from 'react';
import CourseItem from './CourseItem'
// const courseName = 'Ruby'
// const courseSource = 'www.source.com'
// const courseLength = '50 hours'
// const courseDescription = 'Course Description'
class Track extends Component {
  render(){
    return (
      <div className="Track">
        <CourseItem props={this.courseName="Ruby"}/>
      </div>
    )
  }
}

export default Track;
