import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductCard = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setProductData(res.data.products);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-2 mt-20">
      {productData.map((Products) => (
        <div
          key={Products.id}
          className="border flex flex-col gap-2 border-white max-w-4xl rounded-2xl hover:border-emerald-500 p-2"
        >
          <img
            src={Products.thumbnail}
            className="block mx-auto"
            alt={Products.title}
          />
          <div className="flex flex-col gap-1">
            <h3>
              <samp className="font-semibold">Product Name :</samp>{" "}
              {Products.title}
            </h3>
            <p>Description : {Products.description}</p>
            <p>Price : {Products.price}</p>
          </div>
          <div className="flex gap-4 p-5 items-center">
            <button className="border w-fit py-1 px-2 rounded-2xl hover:bg-white font-semibold text-emerald-300 shadow-sm shadow-gray-50">
              Add to cart
            </button>
            <button className="rounded-2xl shadow-sm shadow-white border-gray-500 border p-2">learn more..</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
