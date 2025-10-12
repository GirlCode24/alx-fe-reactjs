import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome Home</h1>
      <nav>
        <Link to="/profile">Go to Profile</Link> |{" "}
        <Link to="/blog/101">View Blog Post 101</Link>
      </nav>
    </div>
  );
}

export default Home;
