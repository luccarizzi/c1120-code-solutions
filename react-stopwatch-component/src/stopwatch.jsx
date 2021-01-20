import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      control: false,
      count: 0,
      watch: ''
    };
    this.pausePlay = this.pausePlay.bind(this);
    this.tick = this.tick.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    if (this.state.control) {
      return (
        <div className="container">
          <div>
            <div onClick={this.reset} className="timer">
              <button>{this.state.count}</button>
            </div>
            <button onClick={this.pausePlay} className="fas fa-pause"></button>
          </div>
        </div>
      )
    }
    return (
      <div className="container">
        <div>
          <div onClick={this.reset} className="timer">
            <button>{this.state.count}</button>
          </div>
          <button onClick={this.pausePlay} className="fas fa-play"></button>
        </div>
      </div>
    )
  }

  pausePlay() {
    if (this.state.control) {
      this.setState({ control: false });
      clearInterval(this.state.watch);
    } else {
      this.setState({
        control: true,
        watch: setInterval(this.tick, 1000)
      });
    }
  }

  tick() {
    this.state.count++;
    this.setState({ count: this.state.count });
  }

  reset() {
    if (!this.state.control) {
      this.setState({ count: 0 })
    }
  }
}

const element = <Stopwatch />;

export default element;
