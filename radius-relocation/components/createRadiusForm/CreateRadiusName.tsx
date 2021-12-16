import React from "react";
import { FormProps } from "./CreateRadius";
import Step1Styles from "../../styles/CreateRadiusStep1.module.css";

const CreateRadiusStep1: React.FC<FormProps> = (props) => {
  const radiusFormData = props.radiusFormData;
  const setRadiusFormData = props.setRadiusFormData;
  return (
    <input
      className={Step1Styles.input}
      type='text'
      placeholder='e.g. Koreatown Loft'
      value={radiusFormData.radiusName}
      onChange={(event) =>
        setRadiusFormData({ ...radiusFormData, radiusName: event.target.value })
      }
    />
  );
};

export default CreateRadiusStep1;
