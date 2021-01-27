import ReactDOM from 'react-dom';
import React from 'react';
import Carousel from './carousel';

// const images = [
//   { id: '001', url: '../images/001.png' },
//   { id: '002', url: '../images/004.png' },
//   { id: '003', url: '../images/007.png' },
//   { id: '004', url: '../images/025.png' },
//   { id: '005', url: '../images/039.png' },
// ]

const person = {
  name: 'Lucca'
}

ReactDOM.render(
  <Carousel person={person.name}/>,
  document.getElementById('root')
)
