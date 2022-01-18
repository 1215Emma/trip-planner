import React from "react";
import Maps from "../components/Maps";
import Navigation from "../components/Navigation";
import Image from "next/image";
import Seattle from "../public/images/Seattle.jpg";
import { BiCalendar } from "react-icons/bi";
import GoogleAutocomplete from '../components/GoogleAutocompete'
interface Props {}

const PlanningDashboard = (props: Props) => {
  return (
    
    <div className='flex flex-col'>
      <Navigation />
      <div className='relative h-80'>
        <Image src={Seattle} alt='Seattle' layout='fill' objectFit='cover' />
      </div>
      <div className='absolute top-60 left-0 right-0 bg-offWhite w-4/5 h-48 mx-auto rounded drop-shadow-lg'>
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
          
          <GoogleAutocomplete />
        </div>
      </div>
    </div>
  );
};

export default PlanningDashboard;
