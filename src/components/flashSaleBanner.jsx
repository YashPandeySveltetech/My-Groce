import React from "react";

const FlashSaleBanner = () => {
  return (
    <div className="relative bg-[url('/flash_sale.png')] m-[50px] rounded-lg  h-[50vh] shadow-lg ">
      <div className="relative z-10  h-full flex flex-col justify-between p-8 bg-opacity-5 bg-purple-200">
        <div className="flex  space-x-5 ">
          <div className="text-center">
            <div className="text-red-500 text-4xl font-bold border border-gray-300 rounded-full h-[7rem] w-[7rem] flex justify-center items-center bg-white">
              438
            </div>
            <div className="text-gray-700">Days</div>
          </div>
          <div className="text-center">
            <div className="text-blue-500 text-4xl font-bold border border-gray-300 rounded-full h-[7rem] w-[7rem] flex justify-center items-center bg-white">
              22
            </div>
            <div className="text-gray-700">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-green-500 text-4xl font-bold border border-gray-300 rounded-full h-[7rem] w-[7rem] flex justify-center items-center bg-white">
              34
            </div>
            <div className="text-gray-700">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text  w-[7rem]-flex  text-4xl font-bold border border-gray-300 rounded-full h-[7rem] w-[7rem] flex justify-center items-center bg-white">
              39
            </div>
            <div className="text-gray-700">Seconds</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              WOO! Flash Sale
            </h2>
            <p className="text-gray-600 mt-2">
              You get into the 2k+ best Products in Flash offer with as in
              shaped sofa for sale.
            </p>
            <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-600">
              Shop Now
            </button>
          </div>
          <div className="relative">
            <div className="absolute top-0 right-40 bg-yellow-400 text-black text-[40px] font-bold rounded-full h-[10rem] w-[10rem] flex justify-center text-center items-center transform translate-x-1/2 -translate-y-1/2">
              20% OFF
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleBanner;
