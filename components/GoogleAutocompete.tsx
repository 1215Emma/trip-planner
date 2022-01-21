import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { ItineraryData } from "../pages/PlanningDashboard";

interface AutocompleteProps {
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setItineraryData: React.Dispatch<React.SetStateAction<ItineraryData[]>>;
}

interface FormattedAddress {
  street_number: string;
  route: string;
  city: string;
  state: string;
  postal_code: string;
}

const GoogleAutocompete: React.FC<AutocompleteProps> = (props) => {
  const address = props.address;
  const setAddress = props.setAddress;
  const setItineraryData = props.setItineraryData;

  const handleSelect = async (value: string) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    console.log(results, "results");
    const splitValue = value.split(",");
    const addressArray: string[] = [];
    const resultsAddress = results[0].address_components;
    for (let i = 0; i < resultsAddress.length; i++) {
      if (
        resultsAddress[i].types[0] == "street_number" ||
        resultsAddress[i].types[0] == "route" ||
        resultsAddress[i].types[0] == "locality" ||
        resultsAddress[i].types[0] == "administrative_area_level_1" ||
        resultsAddress[i].types[0] == "postal_code"
      ) {
        addressArray.push(resultsAddress[i].short_name);
      }
    }
    const formattedAddress: FormattedAddress = {
      street_number: addressArray[0],
      route: addressArray[1],
      city: addressArray[2],
      state: addressArray[3],
      postal_code: addressArray[4],
    };

    setItineraryData((itinerary) => [
      ...itinerary,
      {
        place: splitValue[0],
        address: formattedAddress,
        coordinates: latLng,
        place_type: results[0].types,
      },
    ]);
  };

  return (
    <div className="mt-8">
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        shouldFetchSuggestions={address.length > 1}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <div className="flex bg-lightGrey rounded items-center">
              <FaMapMarkerAlt className="ml-4 opacity-40" />
              <input
                {...getInputProps({ placeholder: "Add a place" })}
                className="bg-lightGrey w-full h-12 px-4 outline-none"
              />
            </div>
            <div className="bg-radiusOrange h-full">
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
    </div>
  );
};

export default GoogleAutocompete;
