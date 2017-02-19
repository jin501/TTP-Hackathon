import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router'
import Discussion from './Discussion';

export default class CourseMenu extends Component {
  state = { activeItem: 'Course' }

  handleItemClick = (e, { name }) => {
    // debugger
    this.setState({ activeItem: name })
  }
  test(){
    // debugger
    if(this.state.activeItem == "Discussion"){
      return <Discussion />
    }
  }
  render() {
    this.props = {courseName: "Ruby"}

    const { activeItem } = this.state
    return (
      <Grid>
        <Grid.Column width={2}>
          <Menu fluid vertical tabular>
            <Menu.Item as={Link} to={'/course/'+ this.props.courseName} name='Course' active={activeItem === 'Course'} onClick={this.handleItemClick.bind(this)} />
            <Menu.Item as={Link} to={'/course/'+ this.props.courseName + '/discussion'} name='Discussion' active={activeItem === 'Discussion'} onClick={this.handleItemClick.bind(this)} />
            <Menu.Item as={Link} to={'/course/'+ this.props.courseName + '/review'} name='Review' active={activeItem === 'Review'} onClick={this.handleItemClick} />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            {this.props.children}
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
