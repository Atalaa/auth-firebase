import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

export default function () {
  const { toggleModals } = useContext(UserContext);

  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">
        AuthJS
      </Link>

      <div>
        <button
          className="btn btn-primary"
          onClick={() => toggleModals("signUp")}
        >
          Sign Up
        </button>
        <button
          className="btn btn-primary ms-2"
          onClick={() => toggleModals("logIn")}
        >
          Log In
        </button>
        <button className="btn btn-danger ms-2">Log Out</button>
      </div>
    </nav>
  );
}
