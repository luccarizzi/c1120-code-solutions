import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      watch: ''
    };
    this.pausePlay = this.pausePlay.bind(this);
    this.tick = this.tick.bind(this);
    this.reset = this.reset.bind(this);
  }

  pausePlay() {
    if (this.state.watch) {
      this.setState({ watch: '' })
      clearInterval(this.state.watch);
    } else {
      this.setState({
        watch: setInterval(this.tick, 1000)
      });
    }
  }

  tick() {
    this.state.count++;
    this.setState({ count: this.state.count });
  }

  reset() {
    if (!this.state.watch) {
      this.setState({ count: 0 })
    }
  }

  render() {
    if (this.state.watch) {
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
}

const element = <Stopwatch />;

export default element;
