import React, { Component } from 'react';
import { Input, Menu, Image, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router';

const logoUrl = 'https://static1.squarespace.com/static/57e01ab38419c2abeec91156/t/582b5bbf6b8f5b751a0d28e6/1479236544884/TTP_Site_Icons_Web.png';
export default class Navbar extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className='navbar'>
        <div className='logo-wrapper'>
          <Image className="logo" size='tiny' src={logoUrl} />
        </div>

        <Menu icon inverted vertical borderless fixed='right' compact>
          <Menu.Item name='user' active={activeItem === 'user'} onClick={this.handleItemClick}>
            <Icon name='user' />
          </Menu.Item>

          <Menu.Item name='users' active={activeItem === 'users'} onClick={this.handleItemClick}>
            <Icon name='users' />
          </Menu.Item>

          <Menu.Item name='sign out' active={activeItem === 'sign out'} onClick={this.handleItemClick}>
            <Icon name='sign out' />
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
