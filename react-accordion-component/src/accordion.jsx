import React from 'react';

export default class Accordion extends React.Component {
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
        <div className='header' key={language.id}>
          <li onClick={this.handleClick} id={language.id}>
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
