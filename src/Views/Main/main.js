import React, { Component } from 'react';
import HeroTitle from './Components/HeroTitle/HeroTitle';
import Personal from './Components/Personal/Personal';
import Skills from './Components/Skills/Skills';
import Timeline from './Components/Timeline/Timeline';
import AOS from 'aos';

AOS.init();

export class Main extends Component {
  render() {
    return (
      <div>
        <HeroTitle />
        <Personal />
        <Timeline />
        <Skills />
      </div>
    );
  }
}

export default Main;
