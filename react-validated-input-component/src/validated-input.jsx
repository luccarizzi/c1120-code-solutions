import React from 'react';

class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    let passwordLength = this.state.value.length;
    let alert = <p className='red'>A password is required.</p>
    let icon = <i className="fas fa-times red"></i>
    if (passwordLength > 7) {
      alert = <p></p>
      icon = <i className="fas fa-check green"></i>
    } else if (passwordLength > 0) {
      alert = <p className='red'>Your password is too short.</p>
    }

    return (
      <form>
        <label htmlFor='password'>Password:</label>
        <div className='container'>
          <input
            id='password'
            name='password'
            type='password'
            onChange={this.handleInput}></input>
          {icon}
        </div>
        {alert}
      </form>
    );
  }
}

const element = <PasswordInput />;

export default element;
