import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

export default function () {
  const { toggleModals } = useContext(UserContext);
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      alert(
        "For some reason we can't disconnect.\n Please check your internet connection and retry."
      );
    }
  };

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
        <button className="btn btn-danger ms-2" onClick={logOut}>
          Log Out
        </button>
      </div>
    </nav>
  );
}
