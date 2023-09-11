import React from "react";
import { useParams, Link } from 'react-router-dom';
import BlogPosts from '../BlogApi';


function Post() {
  const { slug } = useParams();
  const post = BlogPosts[slug];
  if (!post) {
    return <span>The blog post you've requested doesn't exist.</span>;
  }
  const { title, description } = post;
  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to='/posts'>Back</Link>
    </div>
  );
}

export default Post;
