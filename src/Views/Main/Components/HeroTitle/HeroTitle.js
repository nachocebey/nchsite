import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import ScrollButton from '../ScrollButton/ScrollButton';
import AOS from 'aos';

const Hero = styled.div`
  font-size: 8.5vmax;
  line-height: 1;
  cursor: default;
`;

export default function HeroTitle() {
  AOS.init();
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 40, (x - window.innerWidth / 2) / 40, 1];
  const trans = (x, y, s) => `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [propss, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 450, friction: 70 } }));

  return (
    <div className="grid place-content-center h-screen">
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: propss.xys.to(trans) }}
      >
        <Hero className="flex flex-col items-center font-hero text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-600 to-yellow-400" data-aos="zoom-out">
          <span>Nacho</span>
          <span>Cebey</span>
          <span>Honorato</span>
        </Hero>
      </animated.div>
      <span className="py-10">
        <p className="font-sans text-center">Web development.</p>
      </span>
      <ScrollButton to="personal"/>

    </div>
  );
}
