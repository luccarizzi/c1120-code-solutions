import ReactDOM from 'react-dom';
import Accordion from './accordion';
import React from 'react';

const languages = [
  {
    id: '001',
    name: 'Hypertext Markup Language',
    description: 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.'
  },
  {
    id: '002',
    name: 'Cascading Style Sheet',
    description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.'
  },
  {
    id: '003',
    name: 'JavaScript',
    description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.'
  }
];

ReactDOM.render(
  <Accordion />,
  document.getElementById('root')
)
