import { CgSpinnerAlt } from "react-icons/cg";
import { RiPencilFill, RiHome4Fill, RiStickyNoteFill } from "react-icons/ri";

interface PageProps {
  page: number;
  prevPageClicked: boolean
}
const ProgressCircle: React.FC<PageProps> = ({ page, prevPageClicked }) => {
  console.log(prevPageClicked, page)
  return (
    <div className='relative mr-36 mt-12'>
      <CgSpinnerAlt className='absolute z-10 text-8xl text-progressSpinner' />
      <CgSpinnerAlt className='absolute z-10 text-8xl text-progressSpinner rotate-90' />
      <CgSpinnerAlt className='absolute z-10 text-8xl text-progressSpinner rotate-180' />
      <CgSpinnerAlt className='absolute z-10 text-8xl text-progressSpinner -rotate-90' />

      {page === 0 && prevPageClicked === false && (
        <>
          <CgSpinnerAlt className='absolute z-10 text-8xl text-offWhite rotate-90 animate-progress0' />
          <div className='absolute rounded-full p-3 h-auto top-[1.3rem] left-[1.3rem]'>
            <RiPencilFill className='text-3xl' />
          </div>
        </>
      )}
      {page === 0 && prevPageClicked === true && (
        <>
          <CgSpinnerAlt className='absolute z-10 text-8xl text-offWhite' />
          <CgSpinnerAlt className='absolute z-10 text-8xl text-offWhite -rotate-90 animate-reverseProgress1 ' />
          <div className='absolute rounded-full p-3 h-auto top-[1.3rem] left-[1.3rem]'>
            <RiPencilFill className='text-3xl' />
          </div>
        </>
      )}
      {page === 1 && prevPageClicked === false && (
        <>
          <CgSpinnerAlt className='absolute z-10 text-8xl text-offWhite' />
          <CgSpinnerAlt className='absolute z-30 text-8xl text-offWhite animate-progress1' />
          <div className='absolute rounded-full p-3 h-auto top-[1.3rem] left-[1.3rem]'>
            <RiHome4Fill className='text-3xl' />
          </div>
        </>
      )}
      {page === 1 && prevPageClicked === true && (
        <>
          <CgSpinnerAlt className='absolute z-10 text-8xl text-offWhite ' />
          <CgSpinnerAlt className='absolute z-10 text-8xl text-offWhite -rotate-90' />
          <CgSpinnerAlt className='absolute z-10 text-8xl text-offWhite -rotate-180 animate-reverseProgress2' />
          <div className='absolute rounded-full p-3 h-auto top-[1.3rem] left-[1.3rem]'>
            <RiHome4Fill className='text-3xl' />
          </div>
        </>
      )}
      {page === 2 && prevPageClicked === false && (
        <>
          <CgSpinnerAlt className='absolute z-10 text-8xl text-offWhite' />
          <CgSpinnerAlt className='absolute z-30 text-8xl text-offWhite -rotate-90' />
          <CgSpinnerAlt className='absolute z-10 text-8xl -rotate-90 text-offWhite animate-progress2' />
          <div className='absolute rounded-full p-3 h-auto top-[1.3rem] left-[1.3rem]'>
            <RiStickyNoteFill className='text-3xl' />
          </div>
        </>
      )}
    </div>
  );
}

export default ProgressCircle