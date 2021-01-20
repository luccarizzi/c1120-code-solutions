import React from 'react';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switch: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.state.switch) {
      return (
        <div className='container'>
          <div className='button-container-on'>
            <button className="toggle-off" onClick={this.handleClick}></button>
          </div>
          <div className="display">
            <p>ON</p>
          </div>
        </div>
      );
    }
    return (
      <div className='container'>
        <div className='button-container-off'>
          <button onClick={this.handleClick}></button>
        </div>
        <div className="display">
          <p>OFF</p>
        </div>
      </div>
    );
  }

  handleClick() {
    if (this.state.switch) {
      this.setState({ switch: false });
    } else {
      this.setState({ switch: true });
    }
  }
}

const element = <CustomButton />;

export default element;
