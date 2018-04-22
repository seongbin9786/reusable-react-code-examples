import React from 'react';

import ContainerComponent from './ContainerComponent';

const AnotherUsingComponent = (props) => (
  <ContainerComponent>
    <div style={{ border: '1px solid red' }}>
      <h2>저도 ContainerComponent를 재사용하는 또다른 컴포넌트입니다.</h2>
      <p>저의 내용이 아래로 오게 됩니다.</p>
    </div>
  </ContainerComponent>
);

export default AnotherUsingComponent;
