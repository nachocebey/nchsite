import React from 'react';

export default function TimeElementBody(props) {
  return (
    <>
      {!props.componentView ? (
        <div className="transition-all cursor-pointer flex flex-col rounded-lg shadow-md hover:shadow-2xl bg-white px-4 py-5">{props.elementContent}</div>
      ) : (
        <div className="transition-all cursor-pointer flex flex-col rounded-lg shadow-md hover:shadow-2xl bg-white px-4 py-5">{props.elementContentExtended}</div>
      )}
    </>
  );
}
