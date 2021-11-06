import React, { useState } from 'react';
import TimeElementBody from './TimeElementBody';

export default function TimeElement(props) {
  const [componentView, setComponentView] = useState(false);

  return (
    <div className={`flex flex-row w-full`}>
      <div onClick={() => setComponentView(!componentView)} className="w-5/12 px-2 py-10">
        {props.direction === 'left' ? (
          <TimeElementBody
            elementContent={props.elementContent}
            elementContentExtended={props.elementContentExtended}
            componentView={componentView}
          />
        ) : null}
      </div>
      <div className="w-2/12 flex justify-center">
        <div className={`shadow relative flex h-full w-1 ${props.lineColor} items-center justify-center`}>
          <div
            className={`shadow-md absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 ${props.chipColor} leading-none text-center z-10 bg-white font-thin`}
          >
            <div>{`${props.chipDate}`}</div>
          </div>
        </div>
      </div>
      <div onClick={() => setComponentView(!componentView)} className="w-5/12 px-2 py-10">
        {props.direction === 'right' ? (
          <TimeElementBody
            elementContent={props.elementContent}
            elementContentExtended={props.elementContentExtended}
            componentView={componentView}
          />
        ) : null}
      </div>
    </div>
  );
}
