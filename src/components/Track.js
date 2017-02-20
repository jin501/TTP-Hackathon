import React, { Component } from 'react';
import CourseItem from './CourseItem'
import SortableTree from 'react-sortable-tree';

class Track extends Component {
 constructor(props) {
        super(props);

        this.state = {
            treeData: [{ title: 'Chicken', children: [ { title: 'Egg' } ] }],
        };
    }

    render() {
        return (
            <div style={{ height: 400 }}>
                <SortableTree
                    treeData={this.state.treeData}
                    onChange={treeData => this.setState({ treeData })}
                />
            </div>
        );
    }
}

export default Track;


    // const data = [{"course_name":"Ruby", "course_source":"www.source.com", "course_length":"50 hours", "course_description":"Course description", "image_url":"http://semantic-ui.com/images/wireframe/image.png"},]
    // const courses = data ? data.map((e,i) => (
    //   <CourseItem courseName={e["course_name"]} courseSource={e["course_source"]} courseLength={e["course_length"]} courseDescription={e["course_description"]} imgUrl={e["image_url"]} key={i} /> )) : [];
    // return (
    //   <div className="Track">
    //     {courses}
    //   </div>
    // )
