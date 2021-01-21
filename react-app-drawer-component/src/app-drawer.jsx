import React from 'react';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(event) {
    this.setState({
      display: !this.state.display
    });
  }

  render() {
    const display = this.state.display;
    let menu;
    if (display) {
      menu = <Menu />;
    } else {
      menu = <i className='fas fa-bars' onClick={this.handleMenuClick}></i>;
    }

    return (
      <div onClick={this.handleMenuClick}>
        {menu}
      </div>
    );
  }
}

class Menu extends React.Component {
  render() {
    return (
      <div className='d-flex'>
        <div className='menu'>
          <h2>Menu</h2>
          <ul>
            <li>About</li>
            <li>Get Started</li>
            <li>Sign In</li>
          </ul>
        </div>
        <div className='page'>

        </div>
      </div>
    );
  }
}
