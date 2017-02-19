import React, { Component } from 'react';
import { Image as ImageComponent, Item } from 'semantic-ui-react'
import { Link } from 'react-router'

const paragraph = <ImageComponent src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />

class CourseItem extends Component {
  render(){
		const courseName = 'Ruby'
		const courseSource = 'www.source.com'
		const courseLength = '50 hours'
		const courseDescription = 'Course Description'
    return (
      <div className="CourseItem">
				<Item.Group as={Link} to={'/course/'+ this.props.courseName}>
					<Item>
						<Item.Image size='tiny' src={this.props.imgUrl} />
						<Item.Content>
							<Item.Header>{this.props.courseName}</Item.Header>
							<Item.Meta>
								<span className='source'><i>{this.props.courseSource}</i></span>
								<span className='length'>{this.props.courseLength}</span>
							</Item.Meta>
							<Item.Description>{this.props.courseDescription}</Item.Description>
						</Item.Content>
					</Item>
				</Item.Group>
      </div>
    )
  }
}

export default CourseItem;
