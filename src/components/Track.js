import React, { Component } from 'react';
import CourseItem from './CourseItem'
// const courseName = 'Ruby'
// const courseSource = 'www.source.com'
// const courseLength = '50 hours'
// const courseDescription = 'Course Description'
class Track extends Component {
  constructor(){
    super();
  }
  render(){
    let courses = {

    }
    return (
      <div className="Track">
        <CourseItem props={this.courseName}/>
      </div>
    )
  }
}

export default Track;
