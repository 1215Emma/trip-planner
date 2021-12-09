import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import cheerio from "cheerio";
import axios from "axios";
import { GetServerSideProps } from "next";

interface Props {
  Component: any;
  pageProps: any;
  photo: any;
}
function MyApp({ Component, pageProps, photo }: Props) {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  });

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
