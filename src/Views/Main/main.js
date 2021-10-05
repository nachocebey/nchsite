import React, { Component } from 'react';
import HeroTitle from './Components/HeroTitle/HeroTitle';
import Personal from './Components/Personal/Personal';

export class Main extends Component {
  render() {
    return (
      <div>
        <HeroTitle />
        <Personal />
      </div>
    );
  }
}

export default Main;
