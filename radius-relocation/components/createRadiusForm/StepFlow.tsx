import React from 'react'
import { RiPencilFill, RiHome4Fill, RiStickyNoteFill } from "react-icons/ri";
interface Props {
  
}

const StepFlow = () => {
  return (
    <div className='flex flex-col items-center text-offWhite relative h-64'>
      <div className='rounded-full border-2 p-3'>
        <RiPencilFill className='text-3xl' />
      </div>
      <div className='rounded-full border-2 p-3'>
        <RiHome4Fill className='text-3xl' />
      </div>
      <div className='rounded-full border-2 p-3'>
        <RiStickyNoteFill className='text-3xl' />
      </div>
    </div>
  );
}

export default StepFlow