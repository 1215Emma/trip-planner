import React from 'react'
import Navigation from '../components/Navigation'
import StartPlanningButton from '../components/StartPlanningButton'
import StartPlanningForm from '../components/StartPlanningForm'
interface Props {
  
}

const StartPlanning = (props: Props) => {
  return (
    <div>
      <Navigation />
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-darkPurple text-3xl my-12'>Plan a new trip</h1>
        <StartPlanningForm />
      </div>
    </div>
  );
}

export default StartPlanning
