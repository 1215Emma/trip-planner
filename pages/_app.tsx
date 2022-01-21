import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
// API KEY GOOGLE MAPS
const googleMapsApiKey: string | undefined =
  process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY;
// eslint-disable-next-line
const googleMapsApi = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`;
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-offWhite min-h-screen min-w-screen">
      {googleMapsApi !== undefined && (
        <Script src={googleMapsApi} strategy="beforeInteractive" />
      )}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
