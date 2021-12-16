import React from "react";
import { FormProps } from "./CreateRadius";
import Step3Styles from "../../styles//CreateRadiusStep3.module.css";
import { GoDash } from "react-icons/go";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  validateYupSchema,
} from "formik";
import { useFirebaseAuth } from "../../auth/AuthProvider";

const CreateRadiusStep3: React.FC<FormProps> = (props) => {
  const radiusFormData = props.radiusFormData;
  const setRadiusFormData = props.setRadiusFormData;
  const { user } = useFirebaseAuth();
  
  const radiusCreation = async (
    radiusName: string,
    street: string,
    city: string,
    state: string,
    zip: string,
    priceRangeHigh: number,
    priceRangeLow: number,
    sqft: number | string,
    notes?: string
  ) => {
    const response = await fetch("/api/radiusCreation", {
      method: "POST",
      body: JSON.stringify({
        user: user?.uid,
        radiusName,
        street,
        city,
        state,
        zip,
        priceRangeHigh,
        priceRangeLow,
        sqft,
        notes,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data, "DATA");
    // setRadiusFormData({
    //   ...radiusFormData,
    //   street: data.addressData.street,
    //   city: data.addressData.city,
    //   state: data.addressData.state,
    //   zip: data.addressData.zip,
    //   lat: data.addressData.lat,
    //   lng: data.addressData.lng,
    //   priceRangeHigh: Number(priceRangeHigh),
    //   priceRangeLow: Number(priceRangeLow),
    //   sqft: Number(sqft),
    //   notes: notes,
    //   newRadius: true,
    // });
    // if (radiusFormData.newRadius) {
      //   addRadiusProfile()
    // }
  };
  
  const initialValues = radiusFormData;
  return (
    <div className={Step3Styles.content}>
      <div className={Step3Styles.contentLeft}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            let newStreet = values.street.replaceAll(" ", "+");
            radiusCreation(
              values.radiusName,
              newStreet,
              values.city,
              values.state,
              values.zip,
              values.priceRangeHigh,
              values.priceRangeLow,
              values.sqft,
              values.notes
            );
            actions.setSubmitting(false);
          }}
        >
          <Form className={Step3Styles.form}>
            <div className={Step3Styles.priceAndSqft}>
              <div className={Step3Styles.priceRangeLabel}>
                <label>Price</label>
                <div className={Step3Styles.priceRange}>
                  <Field
                    className={Step3Styles.input}
                    id='priceRangeLow'
                    name='priceRangeLow'
                    placeholder='Min'
                  />
                  <GoDash
                    style={{
                      fontSize: "32px",
                      marginTop: "0.5rem",
                      marginLeft: "0.25rem",
                      marginRight: "0.25rem",
                    }}
                  />
                  <Field
                    className={Step3Styles.input}
                    id='priceRangeHigh'
                    name='priceRangeHigh'
                    placeholder='Max'
                  />
                </div>
              </div>
              <div className={Step3Styles.sqft}>
                <label htmlFor='sqft'>Square Feet</label>
                <Field
                  className={Step3Styles.input}
                  id='sqft'
                  name='sqft'
                  placeholder='sqft'
                />
              </div>
            </div>
            <div className={Step3Styles.comments}>
              <label>Notes</label>
              <Field
                component='textarea'
                id='notes'
                name='notes'
                className={Step3Styles.commentsBox}
                rows={10}
                cols={50}
                placeholder='add any comments'
              />
            </div>
            <button className={Step3Styles.submitForm} type='submit'>
              Create Radius
            </button>
          </Form>
        </Formik>
        <div className={Step3Styles.homeData}>
          <label>Bedrooms</label>
          <div className={Step3Styles.homeRadio}>
            <button
              style={{
                border: radiusFormData.bed === 0 ? "#128b7a solid 4px" : "",
              }}
              className={Step3Styles.homeButtons}
              type='button'
              onClick={() =>
                setRadiusFormData({
                  ...radiusFormData,
                  bed: 0,
                })
              }
            >
              Studio
            </button>
            <button
              style={{
                border: radiusFormData.bed === 1 ? "#128b7a solid 4px" : "",
              }}
              className={Step3Styles.homeButtons}
              type='button'
              onClick={() =>
                setRadiusFormData({
                  ...radiusFormData,
                  bed: 1,
                })
              }
            >
              1
            </button>
            <button
              style={{
                border: radiusFormData.bed === 2 ? "#128b7a solid 4px" : "",
              }}
              className={Step3Styles.homeButtons}
              type='button'
              onClick={() =>
                setRadiusFormData({
                  ...radiusFormData,
                  bed: 2,
                })
              }
            >
              2
            </button>
            <button
              style={{
                border: radiusFormData.bed === 3 ? "#128b7a solid 4px" : "",
              }}
              className={Step3Styles.homeButtons}
              type='button'
              onClick={() =>
                setRadiusFormData({
                  ...radiusFormData,
                  bed: 3,
                })
              }
            >
              3
            </button>
            <button
              style={{
                border: radiusFormData.bed === 4 ? "#128b7a solid 4px" : "",
              }}
              className={Step3Styles.homeButtons5}
              type='button'
              onClick={() =>
                setRadiusFormData({
                  ...radiusFormData,
                  bed: 4,
                })
              }
            >
              4+
            </button>
          </div>
          <label>Bathrooms</label>
          <div className={Step3Styles.homeRadio}>
            <button
              style={{
                border: radiusFormData.bath === 1 ? "#128b7a solid 4px" : "",
              }}
              className={Step3Styles.homeButtons}
              type='button'
              onClick={() =>
                setRadiusFormData({
                  ...radiusFormData,
                  bath: 1,
                })
              }
            >
              1
            </button>
            <button
              style={{
                border: radiusFormData.bath === 1.5 ? "#128b7a solid 4px" : "",
              }}
              className={Step3Styles.homeButtons}
              type='button'
              onClick={() =>
                setRadiusFormData({
                  ...radiusFormData,
                  bath: 1.5,
                })
              }
            >
              1.5
            </button>
            <button
              style={{
                border: radiusFormData.bath === 2 ? "#128b7a solid 4px" : "",
              }}
              className={Step3Styles.homeButtons}
              type='button'
              onClick={() =>
                setRadiusFormData({
                  ...radiusFormData,
                  bath: 2,
                })
              }
            >
              2
            </button>
            <button
              style={{
                border: radiusFormData.bath === 2.5 ? "#128b7a solid 4px" : "",
              }}
              className={Step3Styles.homeButtons}
              type='button'
              onClick={() =>
                setRadiusFormData({
                  ...radiusFormData,
                  bath: 2.5,
                })
              }
            >
              2.5
            </button>
            <button
              style={{
                border: radiusFormData.bath === 3 ? "#128b7a solid 4px" : "",
              }}
              className={Step3Styles.homeButtons5}
              type='button'
              onClick={() =>
                setRadiusFormData({
                  ...radiusFormData,
                  bath: 3,
                })
              }
            >
              3+
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRadiusStep3;
