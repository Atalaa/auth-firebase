import { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase-config";

/* create context */
export const UserContext = createContext();

/* create High Order Component which is the Provider that allows to do all that logic that I pass to UserContext later on */
export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  /* MODAL */
  const [modalState, setModalState] = useState({
    signUpModal: false,
    logInModal: false,
  });

  const toggleModals = (modal) => {
    if (modal === "signUp") {
      setModalState({ signUpModal: true, logInModal: false });
    }
    if (modal === "logIn") {
      setModalState({ signUpModal: false, logInModal: true });
    }
    if (modal === "close") {
      setModalState({ signUpModal: false, logInModal: false });
    }
  };

  /* Here props.children is App, children of UserContextProvider */
  return (
    <UserContext.Provider value={{ modalState, toggleModals, signUp }}>
      {props.children}
    </UserContext.Provider>
  );
}
