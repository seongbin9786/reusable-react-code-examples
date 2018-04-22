import React from 'react';

const ContainerComponent = (props) => (
  <div style={{ border: '1px solid ' + props.color, padding: '10px', margin: '50px', width: '1000px' }}>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
  </div>
);

export default ContainerComponent;
