import React from 'react';
import { firebase } from '../firebase/firebase'

// User is a type alias for the authenticated Firebase user returned by onAuthStateChanged. The callback is called with null if no user is authenticated.
type IsLoggedIn = boolean | string;
type User = firebase.User | null
// ContextState is a type alias for the value provided by our context FirebaseAuthContext
type IsLoggedInContext = { isLoggedIn: IsLoggedIn, user: User };

// We do not expose FirebaseAuthContext directly. Instead we expose FirebaseAuthProvider which encapsulates FirebaseAuthContext.Provider and a onAuthStateChanged subscription.
const FirebaseAuthContext = React.createContext<IsLoggedInContext | undefined>(
  undefined
);

const FirebaseAuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<User>(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean | string>("unknown")

  React.useEffect(() => {
    console.log("state = unknown")
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const userCredentials = firebase.auth().currentUser;
        console.log("state = signed in")
        setIsLoggedIn(true)
        setUser(userCredentials)
      } 
      else {
        console.log("state = signed out")
        setIsLoggedIn(false)
      }
      }); 
      return () => unregisterAuthObserver();
  }, []);

  return (
    // <FirebaseUserContext.Provider value={userCredentials}>
    <FirebaseAuthContext.Provider value={{isLoggedIn, user}}>
      {children}
    </FirebaseAuthContext.Provider>
    // </FirebaseUserContext.Provider>
  );
};

// Our hook useFirebaseAuth simply facilitates React.useContext to access the previously defined context. We explicitly check for undefined to catch possible misuses as early as possible.
function useFirebaseAuth() {
  const context = React.useContext(FirebaseAuthContext);
  if (context === undefined) {
    throw new Error(
      "useFirebaseAuth must be used within a FirebaseAuthProvider"
    );
  }
  const isLoggedIn = context.isLoggedIn
  const user = context.user
  console.log(user, "UZZ")
  return {isLoggedIn, user}
}

export { FirebaseAuthProvider, useFirebaseAuth };