import React from 'react';

const images = [
  { id: '001', url: '../images/001.png' },
  { id: '002', url: '../images/004.png' },
  { id: '003', url: '../images/007.png' },
  { id: '004', url: '../images/025.png' },
  { id: '005', url: '../images/039.png' },
]

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 0
    }
    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      this.timer,
      500
    )
  }

  timer() {
    if (this.state.image === 4) {
      this.setState({
        image: 0
      })
    } else {
      this.setState({
        image: this.state.image + 1
      })
    }
  }

  render() {

    console.log(this.state.image)

    return (
      <h1>haya</h1>
    )

  }
}
