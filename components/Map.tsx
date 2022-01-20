import React, { useState } from "react";
import MapStyles from "../styles/Map.module.css";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import mapStyles from "../styles/mapStyles";
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ConvoboxList,
//   ComboboxOption,
// } from "@reach/combobox";
import "@reach/combobox/styles.css";
import { ItineraryData } from '../pages/PlanningDashboard'

// Styling for Google Maps container
interface MapStyleProps {
  width: string;
  height: string;
}

const mapContainerStyle: MapStyleProps = {
  width: "100%",
  height: "100vh",
};

// Where the map starts on initialization, eventually change this to geocode the users current location or preferred location.

interface CoordinateProps {
  lat: number;
  lng: number;
}

const center: CoordinateProps = {
  lat: 47.605,
  lng: -122.3344,
};

// styling and functionality for Google Maps
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

// Click on map, places marker with timestamp

// Google Maps API initialization 

type LoadingMessagesTypes = {
  isLoadError: string;
  isLoadedFalse: string;
};

const LoadingMessages: LoadingMessagesTypes = {
  isLoadError: "Error Loading Maps",
  isLoadedFalse: "Loading Maps",
};

interface MapProps {
  itineraryData: ItineraryData[]
}

const Map: React.FC<MapProps> = (props) => {
  const [input, setInput] = useState({ address: "" });
  

  const itineraryData = props.itineraryData 
  console.log(itineraryData)
  // Initializes loading functionality for Google Maps
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey,
  //   libraries,
  // });
  // If user cant load Google Maps
  // if (loadError) return <>{LoadingMessages.isLoadError}</>;
  // If  user can load  Google Maps, but the map hasn't loaded yet
  // if (!isLoaded) return <>{LoadingMessages.isLoadedFalse}</>;

  // Handles when a user clicks on the map to drop a marker
  // const handleClick = (event: google.maps.MapMouseEvent) => {
  //   setMarkers([
  //     {
  //       lat: event.latLng!.lat(),
  //       lng: event.latLng!.lng(),
  //     },
  //   ]);
  // };

  // Will eventually be for searching a desired location
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
        // onClick={handleClick}
      >
      {itineraryData.length > 0 &&
        itineraryData.map((itinerary) => {
          return (
            <Marker
              key={`${itinerary.coordinates.lat}${itinerary.coordinates.lng}`}
              position={{ lat: itinerary.coordinates.lat, lng: itinerary.coordinates.lng }}
            />
          );
        })}
      </GoogleMap>
  );
};

export default Map;
