import {
  ArrowBigRight,
  ShoppingBag,
  StarMinusIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../component/ProductCard.jsx";


function Home() {
  return (
    <div className="flex flex-col gap-10 mt-20">
      <div className="bg-slate-800 rounded-2xl border-2 p-5">
        <p className="flex gap-2 items-center border w-fit rounded-2xl py-2 px-4 text-emerald-300">
          <StarMinusIcon /> Empower Your Fitness Journey{" "}
        </p>
        <p className="font-bold text-4xl my-3 ">Train Smarter. Live Stronger.</p>
        <p className="mb-4 ">
          Discouver elite gym facilities, join live daily Yoga sessions, and
          order top-tier performance gear--all tailored to your daily wellness
          routine.
        </p>
        <div className="flex gap-5 items-center">
          <Link
            to="/yogaClass"
            className="bg-emerald-500 shadow-sm shadow-white text-black rounded-2xl px-5 py-2 font-bold flex items-center gap-2"
          >
            Explore Yoga Classes
            <ArrowBigRight />
          </Link>
          <Link to="/Product" className="rounded-2xl shadow-sm shadow-white border-gray-500 border p-2">Shop Gear</Link>
        </div>
        
      </div>
      <div>
        <div className="bg-slate-800 border flex flex-col gap-3 hover:border-emerald-300 rounded-2xl py-4 px-5 ">
          <p className="border border-emerald-300 w-fit px-3 py-1 rounded-2xl hover:bg-white text-emerald-300"><ShoppingBag/></p>
          <p className="text-2xl font-bold">Premium Gear</p>
          <p>Top rated resistance bands, eco yoga mats, and recovery supplements.</p>
          <Link to="/Product" className="border w-fit py-1 px-2 rounded-2xl hover:bg-white font-semibold text-emerald-300 shadow-sm shadow-gray-50">View Shop</Link>
        </div>
      </div>
      <div>
        <div className="bg-slate-800 border flex flex-col gap-3 hover:border-emerald-300 rounded-2xl py-4 px-5 ">
          <p className="border border-emerald-300 w-fit px-3 py-1 rounded-2xl hover:bg-white text-emerald-300"><ShoppingBag/></p>
          <p className="text-2xl font-bold">Premium Gear</p>
          <p>Top rated resistance bands, eco yoga mats, and recovery supplements.</p>
          <Link to="/Product" className="border w-fit py-1 px-2 rounded-2xl hover:bg-white font-semibold text-emerald-300 shadow-sm shadow-gray-50">View Shop</Link>
        </div>
      </div>
      <div>
        <div className="bg-slate-800 border flex flex-col gap-3 hover:border-emerald-300 rounded-2xl py-4 px-5 ">
          <p className="border border-emerald-300 w-fit px-3 py-1 rounded-2xl hover:bg-white text-emerald-300"><ShoppingBag/></p>
          <p className="text-2xl font-bold">Premium Gear</p>
          <p>Top rated resistance bands, eco yoga mats, and recovery supplements.</p>
          <Link to="/Product" className="border w-fit py-1 px-2 rounded-2xl hover:bg-white font-semibold text-emerald-300 shadow-sm shadow-gray-50">View Shop</Link>
        </div>
      </div>
      <ProductCard/>
    </div>
  );
}

export default Home;
