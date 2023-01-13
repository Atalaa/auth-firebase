import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">
        AuthJS
      </Link>

      <div>
        <button className="btn btn-primary">Sign up</button>
        <button className="btn btn-primary ms-2">Sign in</button>
        <button className="btn btn-danger ms-2">Log out</button>
      </div>
    </nav>
  );
}
