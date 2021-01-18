import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton() {
  return <button>Click me...</button>;
}

const element = CustomButton();

ReactDOM.render(
  element,
  document.getElementById('root')
);
