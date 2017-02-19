import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router'
import Discussion from './Discussion';
import Review from './Review';
import Course from './Course';

export default class CourseMenu extends Component {
  state = { activeItem: 'Course' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  showComponent(){
    if(this.state.activeItem == "Course"){
      return <Course />
    }
    if(this.state.activeItem == "Discussion"){
      return <Discussion />
    }
    if(this.state.activeItem == "Review"){
      return <Review />
    }

  }

  render() {
    // this.props = {courseName: "Ruby"}

    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={2}>
          <Menu fluid vertical tabular>
            <Menu.Item as={Link} to={'/course/'+ this.props.courseName} name='Course' active={activeItem === 'Course'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to={'/course/'+ this.props.courseName + '/discussion'} name='Discussion' active={activeItem === 'Discussion'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to={'/course/'+ this.props.courseName + '/review'} name='Review' active={activeItem === 'Review'} onClick={this.handleItemClick} />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            {this.showComponent()}
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
