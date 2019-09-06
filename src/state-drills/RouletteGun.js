import React, {Component} from 'react';

class RouletteGun extends React.Component  {
  constructor(props) {
    super(props);
  }

  state = {
    chamber: null,
    spinningTheChamber : false,
    pText : 'start game?'
  }

  timeDone = () => {
    this.setState({
      spinningTheChamber : false,
      chamber : Math.ceil(Math.random() * 8)
    })
    if (this.state.chamber === this.props.bulletInChamber) {
      this.setState({
        pText : 'BANG!!!'
      });
    }
    else {
      this.setState({
        pText : 'You are safe!'
      });
    }
  }

  pulledTrigger = () => {
    this.setState({
      spinningTheChamber : true,
      pText : 'spinning the chamber and pulling the trigger!'
    });
    setTimeout(this.timeDone, 2000);

  }

  render() {
    return(
      <div>
        <p>{this.state.pText}</p>
        <button type="button" onClick={this.pulledTrigger}>Pull the trigger!</button>
      </div>
    )
  }
}

export default RouletteGun;