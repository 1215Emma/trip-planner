import react, { useState } from "react";
import Image from "next/image";
import RadiusProfilesStyles from "../styles/RadiusProfiles.module.css";
import loftPlaceholder from '../public/images/loft-placeholder.jpg'
import { FiPlus } from 'react-icons/fi'
import { motion } from 'framer-motion'
interface Props {
  isCreateRadiusOpen: boolean;
  setIsCreateRadiusOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const RadiusProfiles: React.FC<Props> = ({isCreateRadiusOpen, setIsCreateRadiusOpen}) => {

  // const [isCreateRadiusOpen, setIsCreateRadiusOpen] = useState<boolean>(false);
  // const [radiusProfiles, setRadiusProfiles] = useState<RadiusState>([])
  
  return (
    <div className={RadiusProfilesStyles.RadiusSideNav}>
      <motion.button
        className={RadiusProfilesStyles.CreateRadiusButton}
        whileHover={{ scale: 1.015, transition: { duration: 0.25 } }}
        whileTap={{ scale: 0.975 }}
        onClick={() => {
          setIsCreateRadiusOpen(!isCreateRadiusOpen);
        }}
      >
        <FiPlus style={{ fontSize: "24px" }} /> <p>Add Radius Profile</p>
      </motion.button>
      <div className={RadiusProfilesStyles.RadiusProfilesContainer}>
        <motion.button
          className={RadiusProfilesStyles.RadiusProfiles}
          whileHover={{ scale: 1.015, transition: { duration: 0.25 } }}
          whileTap={{ scale: 0.975 }}
        >
          <div className={RadiusProfilesStyles.RadiusImageContainer}>
            <h3>Koreatown Loft</h3>
            <Image
              src={loftPlaceholder}
              alt="loft placeholder"
              layout="intrinsic"
              objectFit="cover"
            />
          </div>
          <h1>$2600 2 bed 2 bath 1240 sqft</h1>
          <h2>1234 palm tree st. Los Angeles, CA 90005</h2>
        </motion.button>
      </div>
    </div>
  );
};

export default RadiusProfiles;
