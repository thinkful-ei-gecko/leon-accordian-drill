import React, {Component} from 'react';

class HelloWorld extends React.Component {
  state = {
    who : 'world'
  };

  handleClick = word => {
    this.setState({
      who : word
    });
  };

  render() {
    return(
    <div>
        <p>Hello, {this.state.who}</p>
        <button type="button" onClick={(word) => this.handleClick('world')}>World</button>
        <button type="button" onClick={(word) => this.handleClick('friend')}>Friend</button>
        <button type="button" onClick={(word) => this.handleClick('react')}>React</button>
    </div>
    );
  }
}

export default HelloWorld;