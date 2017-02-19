import React, { Component } from 'react';
import CourseItem from './CourseItem'

class Track extends Component {
  render(){
    const data = [{"course_name":"Ruby", "course_source":"www.source.com", "course_length":"50 hours", "course_description":"Course description"},]
    const courses = data ? data.map((e,i) => ( <CourseItem courseName={e["course_name"]} /> )) : [];
    return (
      <div className="Track">
        {courses}
      </div>
    )
  }
}

export default Track;
