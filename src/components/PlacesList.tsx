import React from "react";
import { ImSpoonKnife } from "react-icons/im";
import { FaMapMarker } from "react-icons/fa";
import { ItineraryData } from "../../pages/PlanningDashboard";

interface PlacesProps {
  itineraryData: ItineraryData[];
}
export const PlacesList: React.FC<PlacesProps> = (props) => {
  const itineraryData = props.itineraryData;
  return (
    <div className='flex flex-col'>
      {itineraryData.map((place, index) => {
        return (
            <div className='flex justify-between items-center border rounded pr-4 h-12 bg-lightGrey' key={index}>
              <div className='flex'>
                <FaMapMarker className='text-4xl text-pinRed' />
                <h2 className='-ml-6 text-offWhite text-xl font-bold'>
                  {index + 1}
                </h2>
              </div>
              <h1 className='text-formColor font-bold mr-auto ml-6'>
                {place.place}
              </h1>
              <ImSpoonKnife />
            </div>
        );
      })}
    </div>
  );
};

