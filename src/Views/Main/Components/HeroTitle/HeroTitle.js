import React from 'react';

export default function HeroTitle() {
  return (
    <div className="grid place-content-center h-screen">
      <div className="flex flex-col items-center font-hero text-9xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-600 to-yellow-400">
        <span>Nacho</span>
        <span>Cebey</span>
        <span>Honorato</span>
      </div>
    </div>
  );
}
