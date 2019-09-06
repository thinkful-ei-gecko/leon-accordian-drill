import React, {Component} from 'react';

class Bomb extends React.Component {
  state = {
    count: 0,
    word : 'start'
  }

  checkNumber(num) {
    if (num >= 8) {
      clearInterval(this.interval);
      return 'BOOOM!!!!';
    }
    else if (num % 2) {
      return 'tick';
    }
    else {
      return 'tock';
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log(this.state.count);
      this.setState({
        count: this.state.count+1,
        word: this.checkNumber(this.state.count)
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return(
      <div>
        <p>{this.state.word}</p>
      </div>
    );
  }

}

export default Bomb;