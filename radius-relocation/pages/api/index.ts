import { NextApiRequest, NextApiResponse } from "next";

const cheerio = require("cheerio");
const Cors = require("cors");
const axios = require("axios");
const cors = Cors({
  methods: ["POST"],
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const url = req.body.url;

    const response = await fetch(
      `https://www.zillow.com/b/sawyer-los-angeles-ca-BK9xbp/`
    );

    const textResponse = await response.text();
    const textStartIndex = textResponse.indexOf(
      "510 S",
      textResponse.indexOf("510 S") + 1
    );
    const text = textResponse.substring(textStartIndex, textStartIndex + 156);
    const textEndIndex = text.search(/[<]/);
    const description = text.substring(0, textEndIndex);
    res.status(200).json({ textResponse });
  }
}
