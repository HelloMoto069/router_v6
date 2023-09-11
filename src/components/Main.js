import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NoMatch from "./NoMatch";
import Numbers from "./Numbers";
import PostList from "./PostList";
import Posts from "./Posts";
import Post from "./Post";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NoMatch />} />
      <Route path="/numbers" element={<Numbers />} />
      <Route path="/posts" element={<Posts />}>
        <Route index element={<PostList />} />
        <Route path=":slug" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default Main;
