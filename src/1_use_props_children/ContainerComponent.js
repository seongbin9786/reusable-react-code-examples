import React from 'react';

const ContainerComponent = ({children}) => (
  <div style={{ border: '1px solid orange', padding: '10px', margin: '50px', width: '1000px' }}>
    <h1>이곳은 재사용되는 부분인 ContainerComponent입니다.</h1>
    <p>아래는 Child 컴포넌트의 내용이 오게 됩니다.</p>
    {children}
  </div>
);

export default ContainerComponent;
