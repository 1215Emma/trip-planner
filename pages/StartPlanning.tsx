import React from "react";
import Navigation from "../components/Navigation";
import StartPlanningForm from "../components/StartPlanningForm";
import Link from "next/link";

const StartPlanning = () => {
  return (
    <div>
      <Navigation />
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-darkPurple text-3xl my-12">
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
