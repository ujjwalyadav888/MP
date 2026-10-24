import { useState,useEffect } from "react";
import axios from "axios";
const Allgyms = () => {
    const [allGyms, setallGyms] = useState([]);

  useEffect(() => {
    async function fetchallGyms() {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setallGyms(res.data.products);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    }

    fetchallGyms();
  }, []);
  return (
    <div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-2 mt-20">
      {allGyms.map((Allgyms) => (
        <div
          key={Allgyms.id}
          className="border flex flex-col gap-2 border-white max-w-4xl rounded-2xl hover:border-emerald-500 p-2"
        >
          <img
            src={Allgyms.thumbnail}
            className="block mx-auto"
            alt={Allgyms.title}
          />
          <div className="flex flex-col gap-1">
            <h3>
              <samp className="font-semibold">Product Name :</samp>{" "}
              {Allgyms.title}
            </h3>
            <p>Description : {Allgyms.description}</p>
            <p>Price : {Allgyms.price}</p>
          </div>
          <div className="flex gap-4 p-5 items-center">
            <button className="border w-fit py-1 px-2 rounded-2xl hover:bg-white font-semibold text-emerald-300 shadow-sm shadow-gray-50">
              Take MemberShips
            </button>
            <button className="rounded-2xl shadow-sm shadow-white border-gray-500 border p-2">learn more..</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Allgyms