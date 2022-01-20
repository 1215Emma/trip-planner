import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import Script from 'next/script'
// API KEY GOOGLE MAPS
const googleMapsApiKey: any =
  process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY;


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-offWhite min-h-screen min-w-screen'>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`}
        strategy='beforeInteractive'
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
