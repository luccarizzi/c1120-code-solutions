import React from 'react';

class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      text: 'A password is required.',
      icon: 'fas fa-times red'
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    if (this.state.value.length > 6) {
      this.setState({
        text: '',
        icon: 'fas fa-check green'
      });
    } else if (this.state.value.length > -1) {
      this.setState({
        text: 'Your password is too short.'
      });
    }
    this.setState({
      value: event.target.value
    });

  }

  render() {
    return (
      <form>
        <label htmlFor="password">Password:</label>
        <div className="container">
          <input
            id="password"
            name="password"
            type="password"
            onChange={this.handleInput}></input>
          <i className={this.state.icon}></i>
        </div>
        <p className="red">{this.state.text}</p>
      </form>
    );
  }
}

const element = <PasswordInput />;

export default element;
