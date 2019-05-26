import React from "react";
import "../component/style/style.css";

const NewPost = () => {
  return (
    <div>
      <span>Title</span> <input type="text" name="title" id="title"/>
      <span>Category</span> <input type="text" name="category" id="cate"/>


      <h3>Write New Post</h3>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button id="save-btn">Save</button>
      <button id="cancel-btn">Cancel</button>
    </div>
  );
};

export default NewPost;
