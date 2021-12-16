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
// import usePlacesAutoComplete, {
//   getGeocode,
//   getLating,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ConvoboxList,
//   ComboboxOption,
// } from "@reach/combobox";
import "@reach/combobox/styles.css";


// Styling for Google Maps container
interface MapProps {
  width: string;
  height: string;
}

const mapContainerStyle: MapProps = {
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

const libraries: any = ["places"];

// API Key to allow access to Google Maps
const googleMapsApiKey: any =
  process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY;

// styling and functionality for Google Maps
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

// Click on map, places marker with timestamp
interface Markers {
  RadiusProfiles: {
    lat: number;
    lng: number;
    time: Date;
  }[];
}

// Google Maps API initialization 

type LoadingMessagesTypes = {
  isLoadError: string;
  isLoadedFalse: string;
};

const LoadingMessages: LoadingMessagesTypes = {
  isLoadError: "Error Loading Maps",
  isLoadedFalse: "Loading Maps",
};

const Maps: React.FC = () => {
  const [markers, setMarkers] = useState<Markers["RadiusProfiles"]>([]);
  const [input, setInput] = useState({ address: "" });
  
  // Initializes loading functionality for Google Maps
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });
  // If user cant load Google Maps
  if (loadError) return <>{LoadingMessages.isLoadError}</>;
  // If  user can load  Google Maps, but the map hasn't loaded yet
  if (!isLoaded) return <>{LoadingMessages.isLoadedFalse}</>;

  // Handles when a user clicks on the map to drop a marker
  const handleClick = (event: google.maps.MapMouseEvent) => {
    setMarkers([
      {
        lat: event.latLng!.lat(),
        lng: event.latLng!.lng(),
        time: new Date(),
      },
    ]);
  };

  // Will eventually be for searching a desired location
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='absolute bottom-0 left-0 w-[calc(100vw-41.5rem)]  overflow-hidden'>
      {/* <input
        type="text"
        placeholder="address"
        className=""
        value={input.address}
        onChange={handleChange}
        name="address"
      />
      <button>Search</button> */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
        onClick={handleClick}
      >
        {markers.map((marker) => {
          return (
            <Marker
              key={marker.time.toISOString()}
              position={{ lat: marker.lat, lng: marker.lng }}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
};

export default Maps;
