import React, { useState } from "react";
import Map from "../components/Map";
import Navigation from "../components/Navigation";
import Image from "next/image";
import Seattle from "../public/images/Seattle.jpg";
import { BiCalendar } from "react-icons/bi";
import GoogleAutocomplete from "../components/GoogleAutocompete";
import PlacesList from "../components/PlacesList";


interface ItineraryCoordinates {
  lat: number;
  lng: number;
}

export interface ItineraryData {
  place: string;
  address: {};
  coordinates: ItineraryCoordinates
  place_type: string[]
}
const itinerary: ItineraryData = {
  place: "",
  address: {
    streetNum: "",
    streetName: "",
    city: "", 
    state: "",
    zip: ""
  },
  coordinates: {
    lat: 0,
    lng: 0
  },
  place_type: []
}

export interface DashboardProps {
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  itineraryData: ItineraryData[];
  setItineraryData: React.Dispatch<React.SetStateAction<ItineraryData[]>>;
}
const PlanningDashboard = () => {
  const [address, setAddress] = useState<string>("");
  const [itineraryData, setItineraryData] = useState<ItineraryData[]>([]);
  
  return (
    <div className="flex w-screen">
      <div className='flex flex-col w-[50vw]'>
        <Navigation />
        <div className='relative h-80'>
          <Image src={Seattle} alt='Seattle' layout='fill' objectFit='cover' priority/>
        </div>
        <div className='relative -top-32 left-0 right-0 bg-offWhite w-4/5 h-48 mx-auto rounded drop-shadow-lg'>
          <h1 className='font-bold text-darkPurple text-3xl mt-8 ml-6'>
            Trip to Seattle
          </h1>
          <div className='relative mt-20 ml-6 opacity-50 flex'>
            <BiCalendar className='mr-2 text-2xl' />
          </div>
        </div>
        <div className='mt-20 mx-12'>
          <div>
            <h2 className='font-bold text-darkPurple text-2xl my-10'>
              Places to visit
            </h2>

            <PlacesList itineraryData={itineraryData} />
            <GoogleAutocomplete setAddress={setAddress} address={address}  setItineraryData={setItineraryData} />
          </div>
        </div>
      </div>
      <div className="w-[50vw]">
      <Map itineraryData={itineraryData}/>
      </div>
    </div>
  );
};

export default PlanningDashboard;
