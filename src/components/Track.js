import React, { Component } from 'react';
import CourseItem from './CourseItem'

class Track extends Component {
  constructor(){
    super();
  }
  render(){

    const data = [{"course_name":"Ruby", "course_source":"www.source.com", "course_length":"50 hours", "course_description":"Course description", "image_url":"http://semantic-ui.com/images/wireframe/image.png"},]
    const courses = data ? data.map((e,i) => (
      <CourseItem courseName={e["course_name"]} courseSource={e["course_source"]} courseLength={e["course_length"]} courseDescription={e["course_description"]} imgUrl={e["image_url"]} /> )) : [];
    return (
      <div className="Track">
        {courses}
>>>>>>> 08570295d253a2e3f6b94241036833e5ee84d42e
      </div>
    )
  }
}

export default Track;
