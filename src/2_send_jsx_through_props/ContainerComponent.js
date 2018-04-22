import React from 'react';

const ContainerComponent = (props) => (
  <div style={containerStyle}>
    <h1>이곳은 재사용되는 부분인 ContainerComponent입니다.</h1>
    <div style={flexContainer}>
      <div style={{ border: '1px solid green' }}>
        {props.left}
      </div>
      <p>왼쪽은 props.left의 자리입니다</p>
      <p>오른쪽은 props.right의 자리입니다.</p>
      <div style={{ border: '1px solid green' }}>
        {props.right}
      </div>
    </div>
  </div>
);

const containerStyle = {
  border: '1px solid orange',
  padding: '10px',
  margin: '50px',
  width: '1000px',
};

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '10px',
}

export default ContainerComponent;
