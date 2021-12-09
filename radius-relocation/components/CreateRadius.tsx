import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CreateRadiusStyles from "../styles/CreateRadius.module.css";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import CreateRadiusStep1 from "./CreateRadiusStep1";
import CreateRadiusStep2 from "./CreateRadiusStep2";
import CreateRadiusStep3 from "./CreateRadiusStep3";
import useSWR from 'swr'

interface Props {
  isCreateRadiusOpen: boolean;
  setIsCreateRadiusOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RadiusData {
  radiusName: string;
  address: string;
  priceRangeLow: string;
  priceRangeHigh: string;
  externalUrl: string;
}

const radiusData = {
  radiusName: "",
  address: "",
  priceRangeLow: "",
  priceRangeHigh: "",
  externalUrl: "",
};
const CreateRadius: React.FC<Props> = ({
  isCreateRadiusOpen,
  setIsCreateRadiusOpen,
}) => {
  const [page, setPage] = useState<number>(0);
  const [radiusFormData, setRadiusFormData] = useState<RadiusData>(radiusData);
  const [isUrlProvided, setIsUrlProvided] = useState<boolean>(false);
  const formTitles: string[] = [
    "Give your Radius a name",
    "Paste the link to the house listing",
    "Share other details about this home",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <CreateRadiusStep1
          setRadiusFormData={setRadiusFormData}
          radiusFormData={radiusFormData}
        />
      );
    } else if (page === 1) {
      return (
        <CreateRadiusStep2
          setRadiusFormData={setRadiusFormData}
          radiusFormData={radiusFormData}
        />
      );
    } else if (page === 2) {
      return (
        <CreateRadiusStep3
          setRadiusFormData={setRadiusFormData}
          radiusFormData={radiusFormData}
        />
      );
    }
  };
  console.log(radiusFormData, "RFD")
  async function fetchUrlData(url: string) {
    const response = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({
        url
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    console.log(JSON.stringify({url}), "asdsa")
    const data = await response.json()
    console.log(data)
    // }).then(res => {
    //   console.log(res)
    // })
    // const { urlData } = await response.json()
    // console.log(urlData)
  }
  const NavNext = () => {
    if (page === 1) {
      return (
        <button
          className={CreateRadiusStyles.navigationButtonRight}
          disabled={page == formTitles.length - 1}
          onClick={() => {
            setPage((currPage) => currPage + 1), fetchUrlData(radiusFormData.externalUrl);
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
