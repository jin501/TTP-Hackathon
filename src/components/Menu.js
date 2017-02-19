import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { Link } from 'react-router'

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item as={Link} to='/' name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to='/profile' name='Profile' active={activeItem === 'Profile'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item as={Link} to='/logout' name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}
