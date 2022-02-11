// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { firebase } from "../firebase/firebase";
// import { getAdditionalUserInfo } from 'firebase/auth'

// const createUser = () => {
//   const user = firebase.auth().currentUser;
//   if (user) {
//     fetch("/api/createUser", {
//       method: "POST",
//     body: JSON.stringify({
//       uid: user.uid,
//       email: user.email,
//       name: user.displayName
//     }),
//     headers: {
//       "Content-type": "application/json",
//     },
//     }).then(response => {
//       return response.json();
//     }).catch(error => {
//       console.log("error:", error)
//     })
// }
// }

// const GoogleAuth = async () => {
//   const provider = new GoogleAuthProvider()
//   await signInWithPopup(firebase.auth(), provider).then((results) => {
//     const details = getAdditionalUserInfo(results)
//     if (details?.isNewUser) {
//       createUser()
//     }
//     else {
//       console.log("User already exists")
//     }
//   })
//     .catch(error => {
//     console.log("Error:", error)
//   })

// }

// export default GoogleAuth
