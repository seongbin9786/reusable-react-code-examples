import React from 'react';

import ReusableComponent from './ReusableComponent';

const PropsChangingComponent = (props) => (
  <div>
    <ReusableComponent
      title='저는 제목 부분이에요'
      content='저는 내용 부분입니다.'
      color='blue'
    />
    <ReusableComponent
      title='테두리 색상도 바꾸게 할 수 있죠.'
      content='아 또 홍대가야돼'
      color='red'
    />
  </div>
);

export default PropsChangingComponent;
