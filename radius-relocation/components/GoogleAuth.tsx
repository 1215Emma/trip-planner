import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebase } from "../firebase/firebase";
import { getAdditionalUserInfo } from 'firebase/auth'

const createUser = async () => {
  const user = firebase.auth().currentUser;
  if (user) {

    const response = await fetch("/api/createUser", {
      method: "POST",
    body: JSON.stringify({
      uid: user.uid,
      email: user.email,
      name: user.displayName
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
    const data = await response.json();
    console.log(data, "DATA")
}
}

const GoogleAuth = async () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(firebase.auth(), provider)
    .then((results) => {
      const details = getAdditionalUserInfo(results)
      console.log(details)
      if (details?.isNewUser) {
        console.log("New User")
        createUser()
      }
      else {
        console.log("Old User")
      }
  })
}

export default GoogleAuth

