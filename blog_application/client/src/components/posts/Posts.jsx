import React from "react"; // Make sure to import React
import Post from "../post/Post"; // Import the Post component
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post key={p.id} post={p} /> 
      ))}
    </div>
  );
}
