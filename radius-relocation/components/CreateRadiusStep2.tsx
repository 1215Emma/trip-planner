import React from "react";
import { RadiusData } from "./CreateRadius";
import Step2Styles from "../styles/CreateRadiusStep2.module.css";

interface Props {
  radiusFormData: RadiusData;
  setRadiusFormData: React.Dispatch<React.SetStateAction<RadiusData>>;
}
const CreateRadiusStep2: React.FC<Props> = ({
  setRadiusFormData,
  radiusFormData,
}) => {

    return (
    <>
      <div className={Step2Styles.address}>
        <label className={Step2Styles.addressLabel}>Address</label>
        <label className={Step2Styles.subAddressLabel}>Street</label>
        <input
          className={Step2Styles.inputStreet}
          type="text"
          placeholder="1234 Beach Avenue"
          value={radiusFormData.street}
          onChange={(event) =>
            setRadiusFormData({
              ...radiusFormData,
              street: event.target.value,
            })
          }
        />
        <div className={Step2Styles.addressNoStreet}>
          <div className={Step2Styles.addressNoStreetIndividual}>
            <label className={Step2Styles.subAddressLabel}>City</label>
            <input
              className={Step2Styles.inputCity}
              type="text"
              placeholder="Los Angeles"
              value={radiusFormData.city}
              onChange={(event) =>
                setRadiusFormData({
                  ...radiusFormData,
                  city: event.target.value,
                })
              }
            />
          </div>
          <div className={Step2Styles.addressNoStreetIndividual}>
            <label className={Step2Styles.subAddressLabel}>State</label>
            <input
              className={Step2Styles.inputState}
              type="text"
              placeholder="California"
              value={radiusFormData.state}
              onChange={(event) =>
                setRadiusFormData({
                  ...radiusFormData,
                  state: event.target.value,
                })
              }
            />
          </div>
          <div className={Step2Styles.addressNoStreetIndividual}>
            <label className={Step2Styles.subAddressLabel}>Zip</label>
            <input
              className={Step2Styles.inputZip}
              type="text"
              placeholder="98005"
              value={radiusFormData.zip}
              onChange={(event) =>
                setRadiusFormData({
                  ...radiusFormData,
                  zip: event.target.value,
                })
              }
            />
          </div>
        </div>
        <label>Link to listing</label>
        <input
          className={Step2Styles.input}
          type="text"
          placeholder="e.g. https://www.zillow.com/homedetails/1126-Magnolia-Ave-UNIT-1126-Los-Angeles-CA-90006/2067653549_zpid/"
          value={radiusFormData.externalUrl}
          onChange={(event) =>
            setRadiusFormData({
              ...radiusFormData,
              externalUrl: event.target.value,
            })
          }
        />
      </div>
    </>
  );
};

export default CreateRadiusStep2;
