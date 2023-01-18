import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const UserContext = createContext();

export function UserContextProvider(props) {

  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true); //true because by default data is loaded

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* onAuthStateChanged allows to observe the changes related to Firebase
    i.e. signed in? logged in? logged out? */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoadingData(false);
    });
    return unsubscribe;
  }, []);

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
    <UserContext.Provider
      value={{ modalState, toggleModals, signUp, logIn, currentUser }}
    >
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
