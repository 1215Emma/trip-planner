import {
  getFirestore,
  doc,
  setDoc,
} from "firebase/firestore";

import { NextApiRequest, NextApiResponse } from "next";

const addUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const uid = req.body.uid;
  const email = req.body.email;
  const name = req.body.name;
  const db = getFirestore();

  await setDoc(doc(db, "users", `${uid}`), {
    userInfo: {
      email: email,
      name: name
    },
    radiusProfiles: []
})
};

export default addUser;
