// import { CgSpinnerAlt } from "react-icons/cg";
// import { RiPencilFill, RiHome4Fill, RiStickyNoteFill } from "react-icons/ri";

// interface PageProps {
//   page: number;
//   prevPageClicked: boolean
// }
// const ProgressCircle: React.FC<PageProps> = ({ page, prevPageClicked }) => {
//   console.log(prevPageClicked, page)
//   return (
//     <div className='relative mr-36 mt-12'>
//       <CgSpinnerAlt className='absolute z-10 text-8xl text-progressSpinner' />
//       <CgSpinnerAlt className='absolute z-10 text-8xl text-progressSpinner rotate-90' />
//       <CgSpinnerAlt className='absolute z-10 text-8xl text-progressSpinner rotate-180' />
//       <CgSpinnerAlt className='absolute z-10 text-8xl text-progressSpinner -rotate-90' />

//       {page === 0 && prevPageClicked === false && (
//         <>
//           <CgSpinnerAlt className='absolute z-10 text-8xl text-offWhite rotate-90 animate-progress0' />
//           <div className='absolute rounded-full p-3 h-auto top-[1.3rem] left-[1.3rem]'>
//             <RiPencilFill className='text-3xl' />
//           </div>
//         </>
//       )}
//       {page === 0 && prevPageClicked === true && (
//         <>
//           <CgSpinnerAlt className='absolute z-10 text-8xl text-offWhite' />
//           <CgSpinnerAlt className='absolute z-10 text-8xl text-offWhite -rotate-90 animate-reverseProgress1 ' />
//           <div className='absolute rounded-full p-3 h-auto top-[1.3rem] left-[1.3rem]'>
//             <RiPencilFill className='text-3xl' />
//           </div>
//         </>
//       )}
//       {page === 1 && prevPageClicked === false && (
//         <>
//           <CgSpinnerAlt className='absolute z-10 text-8xl text-offWhite' />
//           <CgSpinnerAlt className='absolute z-30 text-8xl text-offWhite animate-progress1' />
//           <div className='absolute rounded-full p-3 h-auto top-[1.3rem] left-[1.3rem]'>
//             <RiHome4Fill className='text-3xl' />
//           </div>
//         </>
//       )}
//       {page === 1 && prevPageClicked === true && (
//         <>
//           <CgSpinnerAlt className='absolute z-10 text-8xl text-offWhite ' />
//           <CgSpinnerAlt className='absolute z-10 text-8xl text-offWhite -rotate-90' />
//           <CgSpinnerAlt className='absolute z-10 text-8xl text-offWhite -rotate-180 animate-reverseProgress2' />
//           <div className='absolute rounded-full p-3 h-auto top-[1.3rem] left-[1.3rem]'>
//             <RiHome4Fill className='text-3xl' />
//           </div>
//         </>
//       )}
//       {page === 2 && prevPageClicked === false && (
//         <>
//           <CgSpinnerAlt className='absolute z-10 text-8xl text-offWhite' />
//           <CgSpinnerAlt className='absolute z-30 text-8xl text-offWhite -rotate-90' />
//           <CgSpinnerAlt className='absolute z-10 text-8xl -rotate-90 text-offWhite animate-progress2' />
//           <div className='absolute rounded-full p-3 h-auto top-[1.3rem] left-[1.3rem]'>
//             <RiStickyNoteFill className='text-3xl' />
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default ProgressCircle

import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { RiPencilFill, RiHome4Fill, RiStickyNoteFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

interface PageProps {
  page: number;
}
const ProgressCircle: React.FC<PageProps> = ({ page }) => {
  return (
    <div>
      <div className='absolute right-0 mr-36 mt-12  rounded-full'>
        <CircularProgress
          size={"5.5rem"}
          style={{
            color: "white",
            border: "#128b7a solid 1px",
            borderRadius: "50%",
          }}
          variant='determinate'
          value={100}
        />
        <AnimatePresence initial={false} exitBeforeEnter>
          {page === 0 && (
            <motion.div
              className='absolute rounded-full p-[1rem] top-[0.6rem] left-[0.6rem] bg-formColor2'
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.5, duration: 0.5 },
              }}
              exit={{ opacity: 0, transition: { delay: 0.5, duration: 0.5 } }}
            >
              <RiPencilFill className='text-4xl text-white rounded-full ' />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence initial={false} exitBeforeEnter>
          {page === 1 && (
            <motion.div
              className='absolute rounded-full p-[1rem] top-[0.6rem] left-[0.6rem] bg-formColor2'
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.75, duration: 0.5 },
              }}
              exit={{ opacity: 0, transition: { delay: 0.25, duration: 0.5 } }}
            >
              <RiHome4Fill className='text-4xl text-white rounded-full ' />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence initial={false} exitBeforeEnter>
          {page === 2 && (
            <motion.div
              className='absolute rounded-full p-[1rem] top-[0.6rem] left-[0.6rem] bg-formColor2'
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.75, duration: 0.5 },
              }}
              exit={{ opacity: 0, transition: { delay: 0.25, duration: 0.5 } }}
            >
              <RiStickyNoteFill className='text-4xl text-white rounded-full' />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className='absolute z-10 right-0 mr-36 mt-12'>
        <CircularProgress
          size={"5.5rem"}
          style={{ color: "#128b7a" }}
          variant='determinate'
          value={page * 33}
        />
      </div>
    </div>
  );
};

export default ProgressCircle;
