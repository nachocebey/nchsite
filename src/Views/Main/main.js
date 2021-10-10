import React, { Component } from 'react';
import HeroTitle from './Components/HeroTitle/HeroTitle';
import Personal from './Components/Personal/Personal';
import Skills from './Components/Skills/Skills';

export class Main extends Component {
  render() {
    return (
      <div>
        <HeroTitle />
        <Personal />
        {/* <Skills /> */}
      </div>
    );
  }
}

export default Main;
