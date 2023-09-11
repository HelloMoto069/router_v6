import React from 'react';
import BlogPosts from '../BlogApi';
import { Link } from "react-router-dom";


function PostList() {
  return (
    <ul>
    {Object.entries(BlogPosts).map(([slug, { title }]) => (
      <li key={slug}>
        <Link to={`/posts/${slug}`}>
          <h3>{title}</h3>
        </Link>
      </li>
    ))}
  </ul>
  )
}

export default PostList;