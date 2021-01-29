import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0
    }
    this.timer = this.timer.bind(this);
    this.leftArrow = this.leftArrow.bind(this);
    this.rightArrow = this.rightArrow.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.renderDots = this.renderDots.bind(this);
    this.clickDot = this.clickDot.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      this.timer,
      3000
    )
  }

  timer() {
    const { imageIndex } = this.state;
    if (this.state.imageIndex === 4) {
      this.setState({
        imageIndex: 0
      })
    } else {
      this.setState({
        imageIndex: imageIndex + 1
      })
    }
  }

  leftArrow(event) {
    const { imageIndex } = this.state;
    if (imageIndex === 0) {
      this.setState({
        imageIndex: 4
      })
      return
    }
    this.setState({
      imageIndex: imageIndex - 1
    })
    clearInterval(this.timerID)
    this.componentDidMount()
  }

  rightArrow(event) {
    const { imageIndex } = this.state;
    if (imageIndex === 4) {
      this.setState({
        imageIndex: 0
      })
      return
    }
    this.setState({
      imageIndex: imageIndex + 1
    })
    clearInterval(this.timerID)
    this.componentDidMount()
  }

  clickDot(event) {
    const id = parseInt(event.target.id, 10);
    this.setState({
      imageIndex: id
    })
    clearInterval(this.timerID)
    this.componentDidMount()
  }

  renderDots(props) {
    const { imageIndex } = this.state;
    const { carousel } = this.props;

    const list = carousel.map((image, index) => {
      const id = parseInt(carousel[index].id, 10);
      let dot;
      if (index === imageIndex) {
        dot =
          <a key={id} onClick={this.clickDot}>
            <i id={id} className="fas fa-circle px-1 circle-size"></i>
          </a>
        return dot;
      }
      dot =
        <a key={id} onClick={this.clickDot}>
          <i id={id} className="far fa-circle px-1 circle-size"></i>
        </a>

      return <> {dot} </>;
    })
    return (
      <div className = 'row justify-content-center mb-4' >
        <div className='col-4 text-center'>
          {list}
        </div>
      </div>
    )
  }

  renderPage() {
    const { carousel } = this.props;
    const { imageIndex } = this.state;
    return (
      <div className='container mt-4 border border-4 border-dark rounded'>
        <div className='row d-flex'>
          <div className='col-3 d-flex justify-content-center align-self-center'>
            <a onClick={this.leftArrow}><i className='fas fa-chevron-left arrow-size'></i></a>
          </div>
          <div className='col-6 d-flex justify-content-center'>
            <img src={carousel[imageIndex].url} />
          </div>
          <div className='col-3 d-flex justify-content-center align-self-center'>
            <a onClick={this.rightArrow}><i className='fas fa-chevron-right arrow-size'></i></a>
          </div>
        </div>
        <>{this.renderDots()} </>
      </div>
    )
  }

  render() {
    return (
      <>
        {this.renderPage()}
      </>
    )
  }
}
