import React from "react";
import { RadiusData } from "./CreateRadius";
import Step2Styles from '../styles/CreateRadiusStep2.module.css'

interface Props {
  radiusFormData: RadiusData;
  setRadiusFormData: React.Dispatch<React.SetStateAction<RadiusData>>;
}
const CreateRadiusStep2: React.FC<Props> = ({
  setRadiusFormData,
  radiusFormData,
}) => {

  return (
    <input
      className={Step2Styles.input}
      type="text"
      placeholder="e.g. https://www.zillow.com/homedetails/1126-Magnolia-Ave-UNIT-1126-Los-Angeles-CA-90006/2067653549_zpid/"
      value={radiusFormData.externalUrl}
      onChange={(event) =>
        setRadiusFormData({ ...radiusFormData, externalUrl: event.target.value })
      }
    />
  );
};

export default CreateRadiusStep2;
