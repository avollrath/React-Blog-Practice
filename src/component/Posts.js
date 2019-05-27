import React from 'react';
import "../component/style/style.css";
import { data } from"../data.js";
import { Link, Route } from "react-router-dom";
import Post from "./Post.js";


const Posts = ({ match }) => (
  <div className="posts"> 
    
    <div>
    {data.map((item, id) => <div key={id}><Link to={{
      pathname: `${match.url}/${item._id}`,
      state: item, 
    }} style={{textDecoration: 'none', color: '#FFF'}}>
    <div className="post">
    <h2>{item.title}</h2>
    <p>{item.category}</p>
    </div>
    </Link> 
    </div>)}
      
    </div>

    <Route path={`${match.path}/:id`} component={Post} />
    <Link to="/post/newpost" style={{textDecoration: 'none'}}> <button id="add-btn">Add Post</button></Link>
  </div>
);



export default Posts;

