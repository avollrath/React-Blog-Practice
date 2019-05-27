import React from 'react';

const Post = ({ location }) => (
  <div className="fullPost">
    <h2>{location.state.title}</h2>
    <h3>{location.state.category}</h3>
    <p>{location.state.content}</p>
  </div>
)

export default Post;
