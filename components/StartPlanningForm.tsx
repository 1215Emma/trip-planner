import React, { useState } from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import { BiCalendar } from "react-icons/bi";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

interface PlanningFormValues {
  whereTo: string;
}

const StartPlanningForm: React.FC<{}> = () => {
  const [startDate, setStartDate] = useState<Date | null | undefined>();
  const [endDate, setEndDate] = useState<Date | null | undefined>();

  const initialValues: PlanningFormValues = {
    whereTo: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      <Form className='flex flex-col w-96 items-center'>
        <div className='flex items-center border rounded h-16 mb-12 w-full'>
          <label className='mx-4 font-semibold'>Where to?</label>
          <Field
            id='whereTo'
            name='whereTo'
            placeholder='e.g. Seattle, Los Angeles, Portland'
            className='w-64 rounded bg-offWhite'
          />
        </div>
        <div className='flex flex-row items-center border rounded h-16 w-full mb-8'>
          <div className='flex flex-col mx-4 mt-auto'>
            <label className='text-sm font-semibold'>Dates (optional)</label>
            <div className='flex items-center mb-2'>
              <BiCalendar className='mr-4 text-2xl' />
              <DatePicker
                className='bg-offWhite w-32'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <div className='flex items-center mt-auto mb-2'>
            <BiCalendar className='mr-2 text-2xl'/>
            <DatePicker
              className='bg-offWhite w-32'
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default StartPlanningForm;
