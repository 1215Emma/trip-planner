import { NextApiRequest, NextApiResponse } from "next";

const geocode = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {

    const street: string = req.body.street;
    const city: string = req.body.city;
    const state: string = req.body.state;
    const zip: string = req.body.zip;


    // API call to get latitude and longitude of an address
    const response = await fetch(
      `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.NEXT_PUBLIC_MAPQUEST_API_KEY}&street=${street}&city=${city}&state=${state}&postalCode=${zip}
`
    );

    const data = await response.json();
    const metadata = data.results[0];
  }
};

export default geocode;
