import React from "react";
import { FormProps } from "./CreateRadius";
import Step2Styles from "../../styles/CreateRadiusStep2.module.css";


const CreateRadiusStep2: React.FC<FormProps> = (props) => {
  const radiusFormData = props.radiusFormData;
  const setRadiusFormData = props.setRadiusFormData;
  return (
    <>
      <div className='flex flex-col justify-between font-IBMPlexSans'>
        <label className='text-3xl mt-16'>Address</label>
        <label className='text-xl mb-2 mt-4'>Street</label>
        <input
          className='border-none bg-inputField h-16 w-[30rem] shadow-input text-base pl-4'
          type='text'
          placeholder='1234 Beach Avenue'
          value={radiusFormData.street}
          onChange={(event) =>
            setRadiusFormData({
              ...radiusFormData,
              street: event.target.value,
            })
          }
        />
        <div className='flex justify-start mt-4 mb-4'>
          <div className='flex flex-col justify-between'>
            <label className='text-base mb-2'>City</label>
            <input
              className='border-none bg-inputField h-16 w-[20rem] shadow-input text-base p-4 mr-4'
              type='text'
              placeholder='Los Angeles'
              value={radiusFormData.city}
              onChange={(event) =>
                setRadiusFormData({
                  ...radiusFormData,
                  city: event.target.value,
                })
              }
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-base mb-4'>State</label>
            <input
              className='bg-inputField h-16 w-[10rem] shadow-input text-base pl-4 mr-4'
              type='text'
              placeholder='California'
              value={radiusFormData.state}
              onChange={(event) =>
                setRadiusFormData({
                  ...radiusFormData,
                  state: event.target.value,
                })
              }
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-base mb-4'>Zip</label>
            <input
              className='bg-inputField h-16 w-[10rem] shadow-input text-base pl-4 mr-4'
              type='text'
              placeholder='98005'
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
          className='bg-inputField h-16 w-[42rem] shadow-input text-base pl-4 mr-4'
          type='text'
          placeholder='e.g. https://www.zillow.com/homedetails/1126-Magnolia-Ave-UNIT-1126-Los-Angeles-CA-90006/2067653549_zpid/'
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
