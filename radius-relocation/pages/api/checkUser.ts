import { doc, getDoc, getFirestore } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";


const checkUser = async (req: NextApiRequest, res: NextApiResponse) => {

  const uid = req.body.uid
  const db = getFirestore();

  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log("user exists")
    res.send(true)
  } else {
    // doc.data() will be undefined in this case
    console.log("user doesn't exist")
    res.send(false)
  }
};

export default checkUser