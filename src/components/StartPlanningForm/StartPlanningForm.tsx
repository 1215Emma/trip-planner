import React, { useState } from "react";
import {
  Formik,
  // FormikHelpers,
  // FormikProps,
  Form,
  Field,
} from "formik";
import { BiCalendar } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface PlanningFormValues {
  whereTo: string;
}

const StartPlanningForm: React.FC<unknown> = () => {
  const [startDate, setStartDate] = useState<Date | null | undefined>();
  const [endDate, setEndDate] = useState<Date | null | undefined>();

  const initialValues: PlanningFormValues = {
    whereTo: "",
  };
  return (
    <div className="border border-radiusOrange">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form className='flex flex-col w-96'>
          <div className='flex mb-12 w-full'>
            <label className='font-semibold text-2xl ml-4'>Where to?</label>
            <Field
              id='whereTo'
              name='whereTo'
              placeholder='e.g. Seattle, Los Angeles, Portland'
              className='rounded bg-offWhite'
            />
          </div>

          <div className='flex flex-col border rounded h-16 w-full mb-8 pl-4'>
            <label className='text-sm font-semibold'>Dates (optional)</label>
            <div className='flex flex-row mx-4 mt-auto'>
              <div className='flex items-center mb-2'>
                <BiCalendar className='mr-4 text-2xl' />
                <DatePicker
                  className='bg-offWhite w-32'
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className='flex items-center mt-auto mb-2'>
                <BiCalendar className='mr-2 text-2xl' />
                <DatePicker
                  className='bg-offWhite w-32'
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                />
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default StartPlanningForm;
