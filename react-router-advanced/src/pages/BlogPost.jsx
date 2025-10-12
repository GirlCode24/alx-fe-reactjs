import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { postId } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h1>Blog Post ID: {postId}</h1>
      <p>This is the content for blog post #{postId}.</p>
    </div>
  );
}

export default BlogPost;
