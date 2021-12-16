import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CreateRadiusStyles from "../../styles/CreateRadius.module.css";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";
import { MdDriveFileRenameOutline } from "react-icons/md";
import CreateRadiusName from "../createRadiusForm/CreateRadiusName";
import CreateRadiusAddress from "../createRadiusForm/CreateRadiusAddress";
import CreateRadiusOther from "../createRadiusForm/CreateRadiusOther";
import StepFlow from "./StepFlow";
import ProgressCircle from "./ProgressCircle";

// Data structure for Radius profiles
export interface RadiusData {
  radiusCreatorUid: string;
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
};

// Title/Header for each section of multi-Step form
const formTitles: string[] = [
  "Give your Radius a name",
  "Provide the address and link to the listing",
  "Share other details about this home",
];

export interface FormProps {
  radiusFormData: RadiusData;
  setRadiusFormData: React.Dispatch<React.SetStateAction<RadiusData>>;
}

const CreateRadius: React.FC = ({}) => {
  const [page, setPage] = useState<number>(0);
  const [prevPageClicked, setPrevPageClicked] = useState<boolean>(false);
  const [radiusFormData, setRadiusFormData] = useState<RadiusData>(radiusData);

  let props = { radiusFormData, setRadiusFormData };
  // Handles displaying which form page to render
  const PageDisplay = () => {
    if (page === 0) {
      return <CreateRadiusName {...props} />;
    } else if (page === 1) {
      return <CreateRadiusAddress {...props} />;
    } else if (page === 2) {
      return <CreateRadiusOther {...props} />;
    }
  };

  // Handles the functionality and UI for moving to the next step of the multi-step form
  const NavNext = () => {
    if (page === 1) {
      return (
        <button
          className='border-none bg-none'
          disabled={page == formTitles.length - 1}
          onClick={() => {
            setPage((currPage) => currPage + 1);
            setPrevPageClicked(false);
          }}
        >
          <h2 className='border-none bg-none text-2xl'>Next</h2>
        </button>
      );
    } else {
      return (
        <button
          className='border-none bg-none'
          disabled={page == formTitles.length - 1}
          onClick={() => {
            setPage((currPage) => currPage + 1);
            setPrevPageClicked(false); 
          }}
        >
          <h2 className='border-none bg-none text-2xl'>Next</h2>
        </button>
      );
    }
  };

  return (
    <AnimatePresence initial={false} exitBeforeEnter={true}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='relative top-16 left-0 flex flex-col width-full h-[calc(100vh-4rem)] overflow-hidden'
      >
        <div className='flex justify-between'>
          <h1 className='ml-28 pt-4 mt-20 font-merriweather text-5xl text-white'>
            {formTitles[page]}
          </h1>
          <ProgressCircle page={page} prevPageClicked={prevPageClicked} />
        </div>
        <div className='flex flex-col justify-between h-full ml-36'>
          {PageDisplay()}
          <div
            className='flex justify-end items-center mr-28 mt-16
          mb-24 h-auto'
          >
            <button
              className='border-none bg-none'
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
                setPrevPageClicked(true);
              }}
            >
              {/* <StepFlow /> */}
              <h2 className='border-none bg-none text-2xl'>Previous</h2>
            </button>
            <AiOutlineLine className='rotate-90 text-3xl' />
            {NavNext()}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CreateRadius;
