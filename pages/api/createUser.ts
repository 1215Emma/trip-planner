// import {
//   getFirestore,
//   doc,
//   setDoc,
// } from "firebase/firestore";
// import { NextApiRequest, NextApiResponse } from "next";

// const addUser = async (req: NextApiRequest, res: NextApiResponse) => {
//   const uid: string = req.body.uid;
//   const email: string = req.body.email;
//   const name: string = req.body.name;
//   const db = getFirestore();

//   await setDoc(doc(db, "users", `${uid}`), {
//     userInfo: {
//       email: email,
//       name: name
//     },
//     radiusProfiles: []
// })
// };

// export default addUser;
