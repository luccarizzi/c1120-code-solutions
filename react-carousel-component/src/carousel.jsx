import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0
    }
    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      this.timer,
      1500
    )
  }

  timer() {
    if (this.state.imageIndex === 4) {
      this.setState({
        imageIndex: 0
      })
    } else {
      this.setState({
        imageIndex: this.state.imageIndex + 1
      })
    }
  }

  render() {

    const { carousel } = this.props;
    const { imageIndex } = this.state;

    return (
      <div className='container'>
        <div className='row d-flex'>
          <div className='col-3'>
            <i class="fas fa-chevron-left"></i>
          </div>
          <div className='col-6 d-flex justify-content-center'>
            <img src={carousel[imageIndex].url} />
          </div>
          <div>
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    )

  }
}
