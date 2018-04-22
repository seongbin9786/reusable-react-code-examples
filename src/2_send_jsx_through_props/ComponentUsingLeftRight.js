import React from 'react';

import ContainerComponent from './ContainerComponent';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';

function ComponentUsingLeftRight() {
  return (
    <ContainerComponent
      left={
        <LeftComponent />
      }
      right={
        <RightComponent />
      }
    />
  );
}

export default ComponentUsingLeftRight;
