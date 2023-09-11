import React from "react";
import { Link } from "react-router-dom";


function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Ab Ka Krwo Balak</p>
      <Link to='/home'>Back</Link>
    </div>
  );
}

export default NoMatch;
