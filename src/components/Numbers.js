import React from 'react';
import { Link } from "react-router-dom";

function Numbers() {
  return (
    <div>
      <h2>Numbers</h2>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <Link to='/home'>Back</Link>
  </div>
  )
}

export default Numbers;