import React, {Component} from 'react';

class Accordian extends React.Component {

  state = {
    currentClicked : null
  }

  accordianFeature(index) {
    this.setState({
      currentClicked : index
    })
  }

  renderLis() {
    return this.props.sections.map((section, index) => (
      <li key={index}>
        <button type="button" onClick={() => this.accordianFeature(index)}>{section.title}</button>
        <p>{this.state.currentClicked === index && section.content}</p>
      </li>
    ));
  }

  render() {

    return(
      <div>
        <ul>
          {this.renderLis()}
        </ul>

      </div>
    );
  }

}

export default Accordian;