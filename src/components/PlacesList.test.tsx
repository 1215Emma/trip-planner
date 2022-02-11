/**
 * @jest-environment jsdom
 */

import { PlacesList } from "./PlacesList";
import React from "react";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

interface ItineraryCoordinates {
  lat: number;
  lng: number;
}
interface FormattedAddress {
  street_number: string;
  route: string;
  city: string;
  state: string;
  postal_code: string;
}
export interface ItineraryData {
  place: string;
  address: FormattedAddress;
  coordinates: ItineraryCoordinates;
  place_type: string[];
}
[];

const itineraryData: ItineraryData[] = [
  {
    place: "Emma's Apartment",
    address: {
      street_number: "550",
      route: "Broadway",
      city: "Seattle",
      state: "WA",
      postal_code: "98122",
    },
    coordinates: {
      lat: 0,
      lng: 0,
    },
    place_type: [],
  },
];

// pratice jest unit test syntax and creating tests for components


test('component is created when itinerary data is present', () => {
  render(<PlacesList itineraryData={itineraryData} />)

  const data = screen.getByText("1")
  expect(data).toHaveTextContent("1");
})

