import React from 'react';
import TimeElementBody from './TimeElementBody';


export default function TimeElement(props) {

  return (
    <div className={`flex flex-row flex-grow w-full`}>
      <div data-aos="fade-right" className="w-5/12 px-2 my-8 self-center">
        {props.direction === 'left' ? (
          <TimeElementBody
            elementContent={props.elementContent}
            elementContentExtended={props.elementContentExtended}
          />
        ) : null}
      </div>
      <div className="w-2/12 flex justify-center">
        <div className={`relative flex w-1 ${props.lineColor} items-center justify-center`}>
          <div
            className={`absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 ${props.chipColor} leading-none text-center z-10 bg-white font-thin`}
          >
            <div>
              <p className="text-3xl">{`${props.chipDate}`}</p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className="w-5/12 px-2 self-center">
        {props.direction === 'right' ? (
          <TimeElementBody
            elementContent={props.elementContent}
            elementContentExtended={props.elementContentExtended}
          />
        ) : null}
      </div>
    </div>
  );
}
