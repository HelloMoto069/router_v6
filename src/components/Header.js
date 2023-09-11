import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/numbers" style={{ padding: 5 }}>
          Numbers
        </Link>
        <Link to="/posts" style={{ padding: 5 }}>
          Blogs
        </Link>
      </nav>
    </header>
  );
}

export default Header;
