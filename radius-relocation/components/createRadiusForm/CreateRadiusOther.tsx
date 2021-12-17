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
import { motion } from "framer-motion";
import { useFirebaseAuth } from "../../auth/AuthProvider";

const CreateRadiusOther: React.FC<FormProps> = (props) => {
  const radiusFormData = props.radiusFormData;
  const setRadiusFormData = props.setRadiusFormData;
  const { user } = useFirebaseAuth();

  const bedrooms: string[] = ["Studio", "1", "2", "3", "4+"];
  const bathrooms: string[] = ["1", "1.5", "2", "2.5", "3"];
  const roomSelection = () => {
    return (
      <>
        <label className='form-label'>Bedrooms</label>
        <div className='flex flex-row w-80 mt-4 mb-4'>
          {bedrooms.map((bedroom) => {
            return (
              <button
                key={bedroom}
                style={{
                  border:
                    radiusFormData.bed === bedroom ? "#128b7a solid 4px" : "",
                }}
                className='h-16 w-20 border'
                type='button'
                onClick={() =>
                  setRadiusFormData({
                    ...radiusFormData,
                    bed: bedroom,
                  })
                }
              >
                {bedroom}
              </button>
            );
          })}
        </div>
        <label className='form-label'>Bathrooms</label>
        <div className='flex flex-row w-80 mt-4 mb-4'>
          {bathrooms.map((bathroom) => {
            return (
              <button
                key={bathroom}
                style={{
                  border:
                    radiusFormData.bed === bathroom ? "#128b7a solid 4px" : "",
                }}
                className='h-16 w-20 border'
                type='button'
                onClick={() =>
                  setRadiusFormData({
                    ...radiusFormData,
                    bed: bathroom,
                  })
                }
              >
                {bathroom}
              </button>
            );
          })}
        </div>
      </>
    );
  };

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
    <div className='flex flex-col'>

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
          <Form>
            <div className="flex flex-row justify-between">

            <div className='flex flex-col'>
              <label className='form-label'>Price</label>
              <div className='flex justify-start'>
                <Field
                  className='form-input'
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
                  className='form-input'
                  id='priceRangeHigh'
                  name='priceRangeHigh'
                  placeholder='Max'
                />
              </div>
            </div>
            <div className='flex flex-col'>
              <label className='form-label'>Square Feet</label>
              <Field
                className='form-input'
                id='sqft'
                name='sqft'
                placeholder='sqft'
              />
            </div>
            
          </div>
          {roomSelection()}
            <div className='flex flex-col'>
              <label className='form-label'>Notes</label>
              <Field
                component='textarea'
                id='notes'
                name='notes'
                className='commentBox w-[25rem]'
                rows={10}
                cols={50}
                placeholder='add any comments'
              />
            </div>
            <motion.button
              className={Step3Styles.submitForm}
              type='submit'
              whileHover={{ scale: 0.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Create Radius
            </motion.button>
          </Form>
        </Formik>
    </div>
  );
};

export default CreateRadiusOther;
