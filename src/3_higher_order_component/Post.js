import React from "react";

import withRequest from "./withRequest";

const Post = ({ data }) => {
  if (!data)
    return null;

  return (
    <div style={{ border: '1px solid orange', padding: '10px', margin: '50px', width: '1000px' }}>
      <h1>포스트</h1>
      {JSON.stringify(data)}
    </div>
  );
};

const URL = "https://jsonplaceholder.typicode.com/posts/1";

export default withRequest(URL)(Post);
