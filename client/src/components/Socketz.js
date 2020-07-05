import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';

class Sock extends Component {
  constructor(){
    super();
    this.state = {sound: 0};
    this.randomColor = this.randomColor.bind(this);
  }

  randomColor(ind){
    this.setState({sound: ind});
  }

  render() {
    return (
      <div>
        <button onClick={() => this.randomColor(0)}>ehorn</button>
        <button onClick={() => this.randomColor(1)}>mwow</button>
        <P5Wrapper sketch={sketch} sound={this.state.sound}></P5Wrapper>
      </div>
    );
  }
}

export default Sock;
