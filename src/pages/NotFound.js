import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NotFound;
