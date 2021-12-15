import { NextApiRequest, NextApiResponse } from "next";
import { firebase } from '../../firebase/firebase'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const radiusCreatorUid: string = req.body.radiusCreatorUid;
    const creationTime: string = req.body.creationDate;
    const radiusName: string = req.body.radiusName;
    const street: string = req.body.street;
    const city: string = req.body.city;
    const state: string = req.body.state;
    const zip: string = req.body.zip;
    const priceRangeHigh: string = req.body.priceRangeHigh;
    const priceRangeLow: string = req.body.priceRangeLow;
    const sqft: string = req.body.sqft;
    const notes: string = req.body.notes;

    const response = await fetch(
      `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.NEXT_PUBLIC_MAPQUEST_API_KEY}&street=${street}&city=${city}&state=${state}&postalCode=${zip}
`
    );

    const data = await response.json()
    const metadata = data.results[0]
    const addressData = {
      lat: metadata.locations[0].latLng.lat,
      lng: metadata.locations[0].latLng.lng,
      street: metadata.locations[0].street,
      city: metadata.locations[0].adminArea5,
      state: metadata.locations[0].adminArea3,
      zip: metadata.locations[0].postalCode
    }
    const RadiusData = {
      radiusCreatorUid: radiusCreatorUid,
      creationTime: creationTime,
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
    const db = getFirestore()
    const userRef = doc(db, "users", `${radiusCreatorUid}`);
    await setDoc(userRef, RadiusData, { merge: true })
  }
}
