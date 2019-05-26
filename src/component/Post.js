import React,{ Component } from 'react';
import "../component/style/style.css";
import { data } from"../data.js";

class Post extends Component {

  state = {
    posts: []
  }

  handleDelete = id => {

  }

  componentDidMount() {
    this.setState({
      posts: data
    });
  }


render() {
  const { posts } = this.state;

  return (
    <div className="fullPosts">
      {posts.map((post) => {
          return (
            
            <div key={post.id} className="fullPost">
              <h2>{post.title}</h2>
              <h3>{post.category}</h3>
              <p>{post.content}</p>
           </div>
          );
        })}
    </div>
  );
}
}

export default Post;
