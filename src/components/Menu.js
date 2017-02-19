import React, { Component } from 'react';
import { Input, Menu, Image, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router';

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        {/* <Image size='tiny' shape='circular' src='http://www.nyc.gov/html/techjobs/html/img/icon1.png' /> */}

        <Menu icon vertical borderless fixed='right' compact>
          <Menu.Item name='user'  onClick={this.handleItemClick}>
            <Icon name='user' />
          </Menu.Item>

          <Menu.Item name='users'  onClick={this.handleItemClick}>
            <Icon name='users' />
          </Menu.Item>

          <Menu.Item name='sign out'  onClick={this.handleItemClick}>
            <Icon name='sign out' />
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
