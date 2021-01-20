import React from 'react';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.state.count > 17) {
      return (
        <button onClick={this.handleClick} className='button white'>Hot Button</button>
      )
    }
    else if (this.state.count > 14) {
      return (
        <button onClick={this.handleClick} className='button yellow'>Hot Button</button>
      )
    }
    else if (this.state.count > 11) {
      return (
        <button onClick={this.handleClick} className='button orange'>Hot Button</button>
      )
    }
    else if (this.state.count > 8) {
      return (
        <button onClick={this.handleClick} className='button salmon'>Hot Button</button>
      )
    }
    else if (this.state.count > 5) {
      return (
        <button onClick={this.handleClick} className='button lavender'>Hot Button</button>
      )
    }
    else if (this.state.count > 2) {
      return (
        <button onClick={this.handleClick} className='button purple'>Hot Button</button>
      )
    }
    return (
      <button onClick={this.handleClick} className='button black'>Hot Button</button>
    )
  }

  handleClick() {
    this.state.count++;
    this.setState({ count: this.state.count})
  }
}

const element = <CustomButton />;

export default element;
