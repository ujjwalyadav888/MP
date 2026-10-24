import { CheckCheckIcon, DumbbellIcon, SmileIcon } from "lucide-react";
import React from "react";

function about() {
  return (
    <div className="flex justify-center gap-10 h-screen items-center flex-col ">
      <div className="flex flex-col">
        <h1 className="text-2xl text-emerald-500 font-extrabold hover:underline">About FlexPules</h1>
      <p>
        Bridging holistic wellness, community fitness, and high performance
        athletic gear.
      </p>
      </div>
      <div className="flex flex-col border border-white rounded-2xl p-5 gap-3 hover:border-emerald-500">
        <h3 className="font-bold text-emerald-500">Our Mission</h3>
        <p className="min-w-100 w-200">
          At FlexPulse, we believe fitness is not a seasonal routine—it's a
          lifestyle. We provide flexible digital access to world-class trainers,
          studio-grade yoga streams, and trusted gym locations near you.
        </p>
      </div>
      <div className="flex justify-evenly gap-8">
        <div className="border border-white justify-center items-center gap-2 hover:border-emerald-500 w-50 h-40 rounded-4xl p-5 flex flex-col">
          <DumbbellIcon className="font-bold text-emerald-300 "/>
          <p className="font-bold text-2xl">5000+</p>
          <p>Active Members</p>
        </div>
        <div className="border border-white justify-center items-center gap-2 hover:border-emerald-500 w-50 h-40 rounded-4xl p-5 flex flex-col">
          <SmileIcon className="font-bold text-emerald-300 "/>
          <p className="font-bold text-2xl">120+</p>
          <p>Certified Yoga Instructors</p>
        </div>
        <div className="border border-white justify-center items-center gap-2 hover:border-emerald-500 w-50 h-40 rounded-4xl p-5 flex flex-col">
          <CheckCheckIcon className="font-bold text-emerald-300 "/>
          <p className="font-bold text-2xl">250+</p>
          <p>Partner Gym Spots</p>
        </div>
      </div>
    </div>
  );
}

export default about;
