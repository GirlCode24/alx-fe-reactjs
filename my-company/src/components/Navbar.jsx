import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = { padding: "1rem", backgroundColor: "#333", color: "white", display: "flex", gap: "1rem" };
  const linkStyle = { color: "white", textDecoration: "none" };

  return (
    <nav style={navStyle}>
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle} to="/about">About</Link>
      <Link style={linkStyle} to="/services">Services</Link>
      <Link style={linkStyle} to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
