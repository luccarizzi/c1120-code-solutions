import React from 'react';

function Test (props) {

  console.log(props)

  return (
    <h1>{props.person.name}</h1>
  )
}

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
      <Test />
    )

    // return (
    //   <div className='container mt-4 border border-4 border-dark rounded'>
    //     <div className='row d-flex'>
    //       <div className='col-3 d-flex justify-content-center align-self-center'>
    //         <i className='fas fa-chevron-left arrow-size'></i>
    //       </div>
    //       <div className='col-6 d-flex justify-content-center'>
    //         <img src={carousel[imageIndex].url} />
    //       </div>
    //       <div className='col-3 d-flex justify-content-center align-self-center'>
    //         <i className='fas fa-chevron-right arrow-size'></i>
    //       </div>
    //     </div>

    //     <div className='row justify-content-center mb-4'>
    //       <div className='col-4 text-center'>
    //         <i className="far fa-circle px-1 circle-size"></i>
    //         <i className="far fa-circle px-1 circle-size"></i>
    //         <i className="far fa-circle px-1 circle-size"></i>
    //         <i className="far fa-circle px-1 circle-size"></i>
    //         <i className="far fa-circle px-1 circle-size"></i>
    //       </div>
    //     </div>
    //   </div>
    // )

  }
}

// <i class="fas fa-circle"></i>
