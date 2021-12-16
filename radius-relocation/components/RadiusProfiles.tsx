import react, { useState } from "react";
import Image from "next/image";
import RadiusProfilesStyles from "../styles/RadiusProfiles.module.css";
import loftPlaceholder from '../public/images/loft-placeholder.jpg'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { motion } from 'framer-motion'


interface Props {
  isCreateRadiusOpen: boolean;
  setIsCreateRadiusOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const RadiusProfiles: React.FC<Props> = ({isCreateRadiusOpen, setIsCreateRadiusOpen}) => {

  // const [isCreateRadiusOpen, setIsCreateRadiusOpen] = useState<boolean>(false);
  // const [radiusProfiles, setRadiusProfiles] = useState<RadiusState>([])
  
  return (
    <div className='relative flex flex-col ml-auto h-screen w-[41.5rem] min-w-[41.5rem] max-w-[41.5rem] bg-offWhite shadow-[13px_10px_10px_20px_#888888] overflow-hidden'>
      <motion.button
        className={`flex items-center w-auto bg-radiusButton h-auto min-h-12 mt-20 ml-4 mr-auto mb-4 rounded-2xl border cursor-pointer
          ${isCreateRadiusOpen ? "bg-radiusGreen" : ""}`}
        whileHover={{ scale: 1.015, transition: { duration: 0.25 } }}
        whileTap={{ scale: 0.975 }}
        onClick={() => {
          setIsCreateRadiusOpen(!isCreateRadiusOpen);
        }}
      >
        {isCreateRadiusOpen ? (
          <FiMinus className='text-2xl' />
        ) : (
          <FiPlus className='text-2xl' />
        )}
        <p
          className={`text-black no-underline stroke-0.25 stroke-black ml-2 mr-2 font-merriweather font-bold ${
            isCreateRadiusOpen ? "text-white" : "text-current"
          }`}
        >
          Add Radius Profile
        </p>
      </motion.button>
      <div className='flex flex-col w-[95%] h-screen ml-auto mr-auto'>
        <motion.button
          className='flex flex-col max-h-60 h-60 min-h-60 w-[50%] shadow-2xl border mb-4 cursor-pointer'
          whileHover={{ scale: 1.015, transition: { duration: 0.25 } }}
          whileTap={{ scale: 0.975 }}
        >
          <div className='relative flex justify-center min-h-36 h-36 max-h-36 w-[100%]'>
            <h3 className='absolute z-10 bg-radiusBanner w-full h-8 mt-0 pt-1 text-offWhite no-underline stroke-0.25  stroke-black'>
              Koreatown Loft
            </h3>
            <Image
              src={loftPlaceholder}
              alt='loft placeholder'
              layout='intrinsic'
              objectFit='cover'
            />
          </div>
          <h1 className='text-base ml-auto mr-auto mb-1'>
            $2600 2 bed 2 bath 1240 sqft
          </h1>
          <h2 className='text-base ml-auto mr-auto mt-0'>
            1234 palm tree st. Los Angeles, CA 90005
          </h2>
        </motion.button>
        
      </div>
    </div>
  );
};

export default RadiusProfiles;
