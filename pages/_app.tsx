import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-offWhite min-h-screen min-w-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
