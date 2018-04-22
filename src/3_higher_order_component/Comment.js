import React from "react";

import withRequest from "./withRequest";

const Comments = ({ data }) => {
  if (!data)
    return null;

  return (
    <div style={{ border: '1px solid orange', padding: '10px', margin: '50px', width: '1000px' }}>
      <h2>댓글</h2>
      {JSON.stringify(data)}
    </div>
  );
};

const URL = "https://jsonplaceholder.typicode.com/comments/1";

export default withRequest(URL)(Comments);
