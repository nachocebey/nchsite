import React from 'react';
import profile from '../../../../assets/images/Profile.jpg';
import ScrollButton from '../ScrollButton/ScrollButton';

function Personal() {
  return (
    <div className="h-screen flex flex-col sm:flex-row overflow-hidden " id="personal">
      <div className="sm:w-1/3 w-screen sm:h-screen h-1/2 overflow-hidden">
        <img
          src={profile}
          alt="Me, talking on the phone with my mother sitting on a step (In Lisbon)"
          className="sm:h-screen h-full w-full object-cover"
        />
      </div>
      <div className="sm:w-2/3 w-screen sm:h-screen h-1/2 text-center flex flex-col justify-center items-center">
        <p className="p-6 text-4xl ">Basically, me</p>
        <p className="px-20 py-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa ipsum, tincidunt eget ligula eget, tempor
          iaculis ex. Sed sed turpis vitae nisl mollis aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam maximus, velit ac hendrerit sodales, enim augue scelerisque nibh, ac vulputate lacus velit nec lectus.
          Duis id sem sapien. Donec rhoncus risus auctor, commodo neque eget, tristique magna. Vivamus in diam blandit
          ipsum efficitur egestas. Aenean ut maximus augue. Sed vitae imperdiet nisl. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <p className="p-6 font-semibold">enjoy.</p>
        <ScrollButton to="timeline" className="p-6"/>
      </div>
    </div>
  );
}

export default Personal;
