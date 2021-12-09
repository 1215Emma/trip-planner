import React from "react";
import { RadiusData } from "./CreateRadius";
import Step3Styles from "../styles/CreateRadiusStep3.module.css";
import { GoDash } from "react-icons/go";
interface Props {
  radiusFormData: RadiusData;
  setRadiusFormData: React.Dispatch<React.SetStateAction<RadiusData>>;
}
const CreateRadiusStep2: React.FC<Props> = ({
  setRadiusFormData,
  radiusFormData,
}) => {
  return (
    <form className={Step3Styles.form}>
      <div className={Step3Styles.priceRangeLabel}>
        <label>Price</label>
        <div className={Step3Styles.priceRange}>
          <input
            className={Step3Styles.input}
            type="text"
            placeholder="Min"
            value={radiusFormData.priceRangeLow}
            onChange={(event) =>
              setRadiusFormData({
                ...radiusFormData,
                priceRangeLow: event.target.value,
              })
            }
          />
          <GoDash style={{ fontSize: "32px", marginTop: "1rem", marginLeft: "0.25rem", marginRight: "0.25rem"}}/>
          <input
            className={Step3Styles.input}
            type="text"
            placeholder="Max"
            value={radiusFormData.priceRangeHigh}
            onChange={(event) =>
              setRadiusFormData({
                ...radiusFormData,
                priceRangeHigh: event.target.value,
              })
            }
          />
        </div>
      </div>
    </form>
  );
};

export default CreateRadiusStep2;
