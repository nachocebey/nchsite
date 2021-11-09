import React, { useState } from 'react';

export default function TimeElementBody(props) {
  const [componentView, setComponentView] = useState(false);
  return (
    <>
      {!componentView ? (
        <div
          className="cursor-pointer flex flex-col  bg-white"
          onClick={() => setComponentView(!componentView)}
        >
          {props.elementContent}
        </div>
      ) : (
        <div
          className="cursor-pointer flex flex-col bg-white"
          onClick={() => setComponentView(!componentView)}
        >
          {props.elementContentExtended}
        </div>
      )}
    </>
  );
}
