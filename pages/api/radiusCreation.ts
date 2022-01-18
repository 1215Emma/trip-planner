import { NextApiRequest, NextApiResponse } from "next";
import { getFirestore, doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";

// API that handles storing new Radius information into Firestore
const radiusCreation = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method === "POST") {
    const radiusCreatorUid: string = req.body.user;
    const radiusName: string = req.body.radiusName;
    const street: string = req.body.street;
    const city: string = req.body.city;
    const state: string = req.body.state;
    const zip: string = req.body.zip;
    const priceRangeHigh: string = req.body.priceRangeHigh;
    const priceRangeLow: string = req.body.priceRangeLow;
    const sqft: string = req.body.sqft;
    const notes: string = req.body.notes;

    // API call to get latitude and longitude of an address
    const response = await fetch(
      `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.NEXT_PUBLIC_MAPQUEST_API_KEY}&street=${street}&city=${city}&state=${state}&postalCode=${zip}
`
    );

    const data = await response.json();
    const metadata = data.results[0];
    const addressData = {
      lat: metadata.locations[0].latLng.lat,
      lng: metadata.locations[0].latLng.lng,
      street: metadata.locations[0].street,
      city: metadata.locations[0].adminArea5,
      state: metadata.locations[0].adminArea3,
      zip: metadata.locations[0].postalCode,
    };
    
    if (radiusCreatorUid) {
      console.log("got a user")
      const RadiusData = {
        radiusCreatorUid: radiusCreatorUid,
        creationTime: Date.now(),
        radiusName: radiusName,
        lat: addressData.lat,
        lng: addressData.lng,
        street: addressData.street,
        city: addressData.city,
        state: addressData.state,
        zip: addressData.zip,
        priceRangeLow: priceRangeLow,
        priceRangeHigh: priceRangeHigh,
        sqft: sqft,
        notes: notes,
      };
      // Firestore database access
      const db = getFirestore();
      
      await updateDoc(doc(db, "users", `${radiusCreatorUid}`), {
        radiusProfiles: arrayUnion(RadiusData)
      })
      // const userRef = doc(db, "users", `${radiusCreatorUid}`);
      // await setDoc(userRef, {capital: true}, { merge: true });
    } else {
      console.log("CLEARLY NO USER")
    }
  }
};

export default radiusCreation;
