import React from "react";
import { RadiusData } from "./CreateRadius";
import Step1Styles from "../styles/CreateRadiusStep1.module.css";

interface Props {
  radiusFormData: RadiusData;
  setRadiusFormData: React.Dispatch<React.SetStateAction<RadiusData>>;
}
const CreateRadiusStep1: React.FC<Props> = ({
  setRadiusFormData,
  radiusFormData,
}) => {
  return (
    <input
      className={Step1Styles.input}
      type="text"
      placeholder="e.g. Koreatown Loft"
      value={radiusFormData.radiusName}
      onChange={(event) =>
        setRadiusFormData({ ...radiusFormData, radiusName: event.target.value })
      }
    />
  );
};

export default CreateRadiusStep1;
