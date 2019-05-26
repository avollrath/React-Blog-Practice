import React,{ Component } from 'react';
import "../component/style/style.css";
import { data } from"../data.js";
import { Link } from "react-router-dom";


class Main extends Component {

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
    <div className="posts">
      {posts.map((post) => {
          return (
            <Link to="/post" style={{textDecoration: 'none'}}>
            <div key={post.id} className="post">
              <h2>{post.title}</h2>
              <p>{post.category}</p>
          
            </div>
            </Link>
          );
        })}
       <Link to="/post/newpost" style={{textDecoration: 'none'}}> <button id="add-btn">Add Post</button></Link>
    </div>
  );
}
}

export default Main;

