import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

// export const getServerSideProps: GetServerSideProps = async () => {
//   console.log("1");
//   // const { params, req, res } = context
//   const { data } = await axios.get(
//     "https://www.zillow.com/homedetails/142-N-Carondelet-St-Los-Angeles-CA-90026/2067826375_zpid/"
//   );

//   const $ = cheerio.load(data);
//   const photo = cheerio.html($('.home-detail-lightbox'))
//   const image = $('.media-stream-photo img').attr('src');

//   return {
//     photo
//   };
// };
