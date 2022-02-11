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
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions })
        alert(JSON.stringify(values, null, 2))
        actions.setSubmitting(false)
      }}
    >
      <Form className="flex flex-col w-[30rem]">
        <div className="flex items-center h-16 border rounded border-inputGrey mb-2 pl-4">
          <label className="font-semibold text-xl w-3/12">Where to?</label>
          <Field
            id="whereTo"
            name="whereTo"
            placeholder="e.g. Seattle, Los Angeles, Portland"
            className="rounded bg-offWhite w-9/12 h-full"
          />
        </div>

        <div className="flex flex-col h-16 w-full mb-4 border rounded border-inputGrey mt-2 pl-4 pt-2">
          <label className="text-sm font-semibold">Dates (optional)</label>
          <div className="flex mt-auto">
            <div className="flex items-center mb-2">
              <BiCalendar className="mr-2 text-2xl" />
              <DatePicker
                className="bg-offWhite w-32 outline-0"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                placeholderText='Start date'
              />
            </div>
            <div className="flex items-center mt-auto mb-2">
              <BiCalendar className="mr-2 text-2xl" />
              <DatePicker
                className="bg-offWhite w-32 outline-0"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                minDate={new Date()}
                placeholderText='End date'
              />
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  )
};

export default StartPlanningForm;
