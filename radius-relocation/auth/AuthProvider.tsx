import React from 'react';
import { firebase } from '../firebase/firebase'

// User is a type alias for the authenticated Firebase user returned by onAuthStateChanged. The callback is called with null if no user is authenticated.
type IsLoggedIn = boolean | string;
// ContextState is a type alias for the value provided by our context FirebaseAuthContext
type ContextState = { isLoggedIn: IsLoggedIn };
// We do not expose FirebaseAuthContext directly. Instead we expose FirebaseAuthProvider which encapsulates FirebaseAuthContext.Provider and a onAuthStateChanged subscription.
const FirebaseAuthContext = React.createContext<ContextState | undefined>(
  undefined
);

const FirebaseAuthProvider: React.FC = ({ children }) => {
  // const [user, setUser] = React.useState<User>(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean | string>("unknown")
  const value = { isLoggedIn };

  React.useEffect(() => {
    console.log("state = unknown")
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("state = signed in")
        setIsLoggedIn(true)
      } 
      else {
        console.log("state = signed  out")
        setIsLoggedIn(false)
      }
      }); 
      return () => unregisterAuthObserver();
  }, []);

  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
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
  return context.isLoggedIn;
}
export { FirebaseAuthProvider, useFirebaseAuth };