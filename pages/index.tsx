import react, { useState } from 'react'
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { FirebaseAuthProvider } from "../auth/AuthProvider";
import GoogleMapFold from "../public/images/Google-map-fold.png";
import Image from "next/image";
import Navigation from '../components/Navigation'

const Home: NextPage = () => {
  const [pageRendered, setPageRendered] = useState("");

  return (
    <div>
      <Head>
        <title>Radius Relocation</title>
        <meta name='keywords' content='apartments, relocation, moving' />
      </Head>
      <FirebaseAuthProvider>
        <Navigation />

        <div className='flex flex-col justify-center items-center font-francoisOne text-center mx-6'>
          <h1 className='font-bold text-darkPurple text-3xl m-4'>
            The easiest way to plan your trip
          </h1>
          <h2 className='text-formColor text-xl opacity-80'>
            Build, organize, and map your itineraries in a free travel web
            application designed for vacations
          </h2>
          <Link href='/StartPlanning' passHref>
            <a className='startPlanningBtn'>Start planning</a>
          </Link>
          <div className='opacity-40'>
            <Image src={GoogleMapFold} alt='map with pin' />
          </div>
          <h2 className='font-bold text-darkPurple text-xl'>
            Your itinerary and your map in one view
          </h2>
          <h3 className='text-formColor text-sm mt-4 mx-2 opacity-80'>
            No more switching between different apps, tabs, and tools to keep
            track of your travel plans.
          </h3>
        </div>
      </FirebaseAuthProvider>
    </div>
  );
};

export default Home;
