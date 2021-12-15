import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CreateRadiusStyles from "../styles/CreateRadius.module.css";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import CreateRadiusName from "../createRadiusForm/CreateRadiusName";
import CreateRadiusAddress from "../createRadiusForm/CreateRadiusAddress";
import CreateRadiusOther from "../createRadiusForm/CreateRadiusOther";

// Data structure for Radius profiles
export interface RadiusData {
  radiusCreatorUid: string,
  radiusName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  priceRangeLow: number;
  priceRangeHigh: number;
  bed: number;
  bath: number;
  sqft: number | string;
  notes?: string;
  externalUrl: string;
  lat: number;
  lng: number;
  newRadius: boolean;
}

const radiusData: RadiusData = {
  radiusCreatorUid: "",
  radiusName: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  priceRangeLow: 0,
  priceRangeHigh: 0,
  bed: 0,
  bath: 0,
  sqft: 0,
  notes: "",
  externalUrl: "",
  lat: 0,
  lng: 0,
  newRadius: false
};

// Title/Header for each section of multi-Step form
const formTitles: string[] = [
  "Give your Radius a name",
  "Provide the address and link to the listing",
  "Share other details about this home",
];

const CreateRadius: React.FC = ({
}) => {
  const [page, setPage] = useState<number>(0);
  const [radiusFormData, setRadiusFormData] = useState<RadiusData>(radiusData);
  // Handles displaying which form page to render
  const PageDisplay = () => {
    if (page === 0) {
      return (
        <CreateRadiusName
          setRadiusFormData={setRadiusFormData}
          radiusFormData={radiusFormData}
        />
      );
    } else if (page === 1) {
      return (
        <CreateRadiusAddress
          setRadiusFormData={setRadiusFormData}
          radiusFormData={radiusFormData}
        />
      );
    } else if (page === 2) {
      return (
        <CreateRadiusOther
          setRadiusFormData={setRadiusFormData}
          radiusFormData={radiusFormData}
        />
      );
    }
  };

  // Handles the functionality and UI for moving to the next step of the multi-step form
  const NavNext = () => {
    if (page === 1) {
      return (
        <button
          className={CreateRadiusStyles.navigationButtonRight}
          disabled={page == formTitles.length - 1}
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
        >
          <FaRegArrowAltCircleRight style={{ fontSize: "48px" }} />
        </button>
      );
    } else {
      return (
        <button
          className={CreateRadiusStyles.navigationButtonRight}
          disabled={page == formTitles.length - 1}
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
        >
          <FaRegArrowAltCircleRight style={{ fontSize: "48px" }} />
        </button>
      );
    }
  };
  
  return (
    <AnimatePresence initial={false} exitBeforeEnter={true}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={CreateRadiusStyles.formContainer}
      >
        <h1>{formTitles[page]}</h1>
        <div className={CreateRadiusStyles.innerFormContainer}>
          <button
            className={CreateRadiusStyles.navigationButtonLeft}
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            <FaRegArrowAltCircleLeft style={{ fontSize: "48px" }} />
          </button>
          {PageDisplay()}
          {NavNext()}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CreateRadius;
