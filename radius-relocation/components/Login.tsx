import React, { useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebase } from "../firebase/firebase";
import { User } from "./Layout";

type Props = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  user: User;
};
const uiConfig = {
  signInFlow: "popup",
  SignInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in
    signInSuccessWithAuthResult: (): boolean => false,
  },
};

const Login: React.FC<Props> = ({ setIsLoggedIn, setUser, user }) => {
  // Listen to the Firebase Auth state and set the local state
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((users) => {
        console.log(users)
        if (users) {
          setIsLoggedIn(!!users);
          setUser({
            ...user,
            displayName: users!.displayName,
            email: users!.email,
            photoURL: users!.photoURL,
            createdTime: users!.metadata.createdAt,
            lastLoggedIn: users!.metadata.lastLoginAt,
            uid: users!.uid,
          });
          console.log("fuck")
        } else {
          return (
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          );
        }
      });

    return () => unregisterAuthObserver(); // Makes sure we un-register Firebase observers when the component unmounts
  }, []);
  
  return (
    <></>
  )
};

export default Login;
