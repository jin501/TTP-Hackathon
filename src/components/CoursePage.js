import React, { Component } from 'react';
import CourseMenu from './course/CourseMenu'

class CoursePage extends Component {
  render() {

    return (
      <div className="CoursePage">
        <h1>CoursePage</h1>
        <CourseMenu />
      </div>
    );
  }
}

export default CoursePage;
