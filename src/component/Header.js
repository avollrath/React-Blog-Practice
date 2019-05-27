import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/post">Home</NavLink>
          </li>
          <li>
            <NavLink to="/post/NewPost">New Post</NavLink>
          </li>
        </ul>
      </nav>
      <h1>André's Dinosaur Blog</h1>
      <h3>Freshest content since the Mesozoic era</h3>
    </div>
  );
};

export default Header;
