"use client";
import React, {useState} from "react";
import {categoryData, brands} from "@/assets/constant/categoryConstant";

const CategorySidebar = () => {
  const [price, setPrice] = useState(50);
  return (
    <div className="w-[300px] h-[100%] bg-white-50 shadow-md px-10 py-5 rounded-lg">
      <div className="text-left font-bold py-5">Product categories</div>
      {categoryData.map((item, index) => (
        <div key={index} className="flex items-center  justify-start mb-5">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 focus:ring-opacity-25 mr-3"
          />
          <span className="text-gray-700 font-medium">{item.title}</span>
        </div>
      ))}
      <hr></hr>

      <div className="w-full max-w-sm mx-auto my-5">
        <div className="text-left font-bold py-5">Price Range</div>
        <div className="relative pt-1">
          <input
            type="range"
            min="0"
            max="100"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer z-10"
          />
          <div className="relative w-full h-2 bg-gray-200 rounded-lg">
            <div
              className="absolute h-2 bg-green-500 rounded-lg"
              style={{width: `${price}%`}}
            ></div>
            <div
              className="absolute w-4 h-4 bg-blue-500 rounded-full"
              style={{
                left: `${price}%`,
                transform: "translate(-50%, -50%)",
                top: "50%",
              }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-700">Price: ${price}</span>
        </div>
      </div>
      <hr></hr>
      <div className="text-left font-bold py-5">Brands</div>
      {brands.map((item, index) => (
        <div key={index} className="flex items-center  justify-start mb-5">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 focus:ring-opacity-25 mr-3"
          />
          <span className="text-gray-700 font-medium">{item.title}</span>
        </div>
      ))}

      <hr></hr>
      <div className="text-left font-bold py-5">Brands</div>
      <div className="flex items-center  justify-start mb-5">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 focus:ring-opacity-25 mr-3"
        />
        <span className="text-gray-700 font-medium">Small</span>
      </div>
      <div className="flex items-center  justify-start mb-5">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 focus:ring-opacity-25 mr-3"
        />
        <span className="text-gray-700 font-medium">Big</span>
      </div>
    </div>
  );
};

export default CategorySidebar;
