import React from 'react';
import styled from 'styled-components';
import profile from '../../../../assets/images/Profile-2.jpg'

const Title = styled.div`
  font-size: 6vmax;
  text-align: center;
  cursor: default;
`;

function Personal() {
  return (
    <div className="h-screen flex flex-col " id="personal">
      {/* <div className="py-10 flex flex-row justify-center">
        <Title>
          <span>hello</span>
        </Title>
        <Title className="pl-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-600 to-yellow-400">
          <span>world</span>
        </Title>
      </div> */}
      <div className="flex flex-col sm:flex-row overflow-hidden h-full">
        <div className="sm:w-1/2 sm:h-full h-1/2 w-full">
          <img src={profile} alt="Basically me" className="h-full w-full object-cover" />
        </div>
        <div className="sm:w-1/2 sm:h-full h-1/2 w-full">
          <span>DESCRIPTION</span>
        </div>
      </div>
    </div>
  );
}

export default Personal;
