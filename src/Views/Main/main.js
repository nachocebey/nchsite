import React, { Component } from 'react';
import HeroTitle from './Components/HeroTitle/HeroTitle';

export class Main extends Component {
  render() {
    return (
      <div>
        <HeroTitle />
        <div>h-screen</div>
      </div>
    );
  }
}

export default Main;
