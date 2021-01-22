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

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      id: event.target.id
    });
    const id = this.state.id;
    if (id === event.target.id) {
      event.target.nextSibling.className = 'd-none';
      this.setState({
        id: ''
      });
    }
  }

  render() {
    const listLanguages = languages.map(language => {
      let p;
      if (this.state.id === language.id) {
        p = <p>{language.description}</p>;
      }
      return (
        <div className='header'>
          <li onClick={this.handleClick} key={language.id} id={language.id}>
            {language.name}
          </li>
          {p}
        </div>
      );
    });
    return (
      <ul>{listLanguages}</ul>
    );
  }
}

const element = <Accordion />;

export default element;
