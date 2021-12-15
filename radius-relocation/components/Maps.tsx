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
import { number, string } from "yup/lib/locale";

interface MapProps {
  width: string;
  height: string;
}
interface CoordinateProps {
  lat: number;
  lng: number;
}

const libraries: any = ["places"];
const googleMapsApiKey: any =
  process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY;
const mapContainerStyle: MapProps = {
  width: "100%",
  height: "100vh",
};
const center: CoordinateProps = {
  lat: 47.605,
  lng: -122.3344,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
interface Markers {
  RadiusProfiles: {
    lat: number;
    lng: number;
    time: Date;
  }[];
}
const LoadingMessages: LoadingMessagesTypes = {
  isLoadError: "Error Loading Maps",
  isLoadedFalse: "Loading Maps",
};
type LoadingMessagesTypes = {
  isLoadError: string;
  isLoadedFalse: string;
};

const Maps: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });
  const [markers, setMarkers] = useState<Markers["RadiusProfiles"]>([]);
  const [input, setInput] = useState({ address: "" });

  if (loadError) return <>{LoadingMessages.isLoadError}</>;
  if (!isLoaded) return <>{LoadingMessages.isLoadedFalse}</>;

  const handleClick = (event: google.maps.MapMouseEvent) => {
    setMarkers([
      {
        lat: event.latLng!.lat(),
        lng: event.latLng!.lng(),
        time: new Date(),
      },
    ]);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={MapStyles.mapContainer}>
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
