import React, { Component } from 'react';
import { Image as ImageComponent, Item } from 'semantic-ui-react'

const paragraph = <ImageComponent src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />

class CourseItem extends Component {
  render(){
    return (
      <div className="CourseList">
				<Item.Group>
					<Item>
						<Item.Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />
						<Item.Content>
							<Item.Header>Arrowhead Valley Camp</Item.Header>
							<Item.Meta>
								<span className='price'>$1200</span>
								<span className='stay'>1 Month</span>
							</Item.Meta>
							<Item.Description>paragraph</Item.Description>
						</Item.Content>
					</Item>
				</Item.Group>
        <Item.Group>
					<Item>
						<Item.Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />
						<Item.Content>
							<Item.Header>Arrowhead Valley Camp</Item.Header>
							<Item.Meta>
								<span className='price'>$1200</span>
								<span className='stay'>1 Month</span>
							</Item.Meta>
							<Item.Description>paragraph</Item.Description>
						</Item.Content>
					</Item>
				</Item.Group>
        <Item.Group>
					<Item>
						<Item.Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />
						<Item.Content>
							<Item.Header>Arrowhead Valley Camp</Item.Header>
							<Item.Meta>
								<span className='price'>$1200</span>
								<span className='stay'>1 Month</span>
							</Item.Meta>
							<Item.Description>paragraph</Item.Description>
						</Item.Content>
					</Item>
				</Item.Group>
      </div>
    )
  }
}

export default CourseItem;
