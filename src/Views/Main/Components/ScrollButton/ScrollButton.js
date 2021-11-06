import React from 'react';
import { Link } from 'react-scroll';

export default function ScrollButton(props) {
  return (
    <span className={`transition duration-500 ease-in-out hover:text-black text-gray-400 justify-self-center animate-bounce cursor-pointer ${props.className}`}>
      <Link to={props.to} spy={true} smooth={true}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </Link>
    </span>
  );
}
