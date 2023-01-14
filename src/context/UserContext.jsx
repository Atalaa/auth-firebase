import { createContext, useState, useEffect } from "react";

//create context
export const UserContext = createContext();

//create High Order Component which is the Provider that allows to do all that logic that I pass to UserContext later on
export function UserContextProvider(props) {
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

  return (
    <UserContext.Provider value={{ modalState, toggleModals }}>
      {props.children}
    </UserContext.Provider>
  );
}
//Here props.children is App, children of UserContextProvider 