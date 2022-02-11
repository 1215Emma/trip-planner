import React from "react";
import Navigation from "../src/components/Navigation";
import StartPlanningForm from "../src/components/StartPlanningForm/StartPlanningForm";
import Link from "next/link";

const StartPlanning = () => {
  return (
    <div>
      <Navigation />
      <div className="flex-col-center">
        <h1 className="font-bold text-darkPurple text-6xl my-12 font-souvenir opacity-75">
          Plan a new trip
        </h1>
        <StartPlanningForm />
        <Link href="/PlanningDashboard" passHref>
          <a className="startPlanningBtn">Start planning</a>
        </Link>
      </div>
    </div>
  );
};

export default StartPlanning;
