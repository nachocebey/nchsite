import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
  font-size: 6vmax;
  text-align: center;
  cursor: default;
`;

function Personal() {
  return (
    <div class="h-screen flex flex-col" id="personal">
      <div className="py-10">
          <Title>hello world</Title>
      </div>
      <div class="flex flex-col sm:flex-row justify-center">
        <span>IMG</span>
        <span>DESCRIPTION</span>
      </div>
    </div>
  );
}

export default Personal;
