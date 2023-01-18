import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Home() {
  const { currentUser } = useContext(UserContext);


  return (
    <div className="container p-5">
      <h1 className="display-3 text-light">
        { currentUser ? "Welcome to home page" : "Sign Up or Log in"}
      </h1>
    </div>
  );
}
