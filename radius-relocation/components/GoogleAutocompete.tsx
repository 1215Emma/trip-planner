import React, { useState } from "react";
import Script from "next/script";
import { FaMapMarkerAlt } from 'react-icons/Fa'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import geocode from '../pages/api/geocode'

interface Props {}

const GoogleAutocompete = (props: Props) => {
  const [address, setAddress] = useState<string>("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null })
  console.log(address)
  const handleSelect = async (value: string) => {
    const splitTerm = value.split(",")
    const street = splitTerm[1]
    const city = splitTerm[2]
    const state = splitTerm[3]
    const response = await fetch("/api/geocode", {
      method: "POST",
      body: JSON.stringify({
        street,
        city,
        state
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data, "DATA");
    // const results = await geocode()
  };
  return (
    <>
      <Script
        src='https://maps.googleapis.com/maps/api/js?key=AIzaSyABE5X7QOavD2wBnyPMAe7j99TWqJf2_kY&libraries=places'
        strategy='beforeInteractive'
      />
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <div className='flex bg-lightGrey rounded items-center'>
              <FaMapMarkerAlt className="ml-4 opacity-40"/>
              <input
                {...getInputProps({ placeholder: "Add a place" })}
                className='bg-lightGrey w-full h-12 px-4 outline-none'
              />
            </div>
            <div className='bg-radiusOrange h-full'>
              {loading ? <div>...loading</div> : null}

              {suggestions.slice(0, 3).map((suggestion) => {
                console.log(suggestion);
                const style = {
                  backgroundColor: suggestion.active ? "#ffffff80" : "#FAF9F6",
                };

                return (
                  // Key is embedded into the getSuggestionItemProps function. Adding a key to over-ride it breaks the function
                  // eslint-disable-next-line react/jsx-key
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
};

export default GoogleAutocompete;
