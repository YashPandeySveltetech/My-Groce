"use client";
import React, {useState} from "react";

const ProductDetailModal = () => {
  if (true) return null;

  const [isExpanded, setIsExpanded] = useState(false);
  const fullText =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed inset-0  z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 w-[90%] h-[90%] mx-auto rounded-lg  relative shadow-lg">
        <button
          // onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <div className=" mx-auto p-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Image */}

            <div className="md:w-1/2 relative">
              <div className="absolute top-4 left-4 bg-green-500 text-white rounded-full p-2">
                -40%
              </div>
              <img
                src="/orange.webp"
                alt="Beets"
                className="w-full rounded-lg"
              />
              <div className="mt-4">
                <img
                  src="/orange.webp"
                  alt="Thumbnail"
                  className="w-20 border rounded"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="md:w-1/2">
              <p className="text-gray-500 uppercase">VEGETABLE</p>
              <h1 className="text-2xl font-bold mt-2">
                Perdue Simply Smart Organics Gluten Free
              </h1>
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">0 Reviews</span>
              </div>
              <div className="mt-4">
                <span className="text-gray-500 line-through">₹25</span>
                <span className="text-2xl font-bold text-red-500 ml-2">
                  ₹15.00
                </span>
              </div>

              <div>
                <p className="mt-4 text-gray-600">
                  {isExpanded ? fullText : `${fullText.slice(0, 150)}...`}
                </p>
                <button
                  className="text-blue-500 mt-2 hover:underline focus:outline-none"
                  onClick={toggleExpand}
                >
                  {isExpanded ? "See Less" : "See More"}
                </button>
              </div>

              <div className="mt-4">
                <p className="font-semibold">
                  Availability :{" "}
                  <span className="text-green-500">982 Products Available</span>
                </p>
              </div>
              <div className="flex   items-center mt-4 gap-2">
                <div className="border  flex justify-start px-4 py-2">
                  <button className="px-1">-</button>
                  <input
                    type="text"
                    className="w-[30px] px-1"
                    value="1"
                    readOnly
                  />
                  <button className="px-1">+</button>
                </div>

                <button className="ml-4 border p-2 rounded">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <button className="w-full bg-green-500 text-white py-2 rounded ">
                  Add To Cart
                </button>
              </div>

              <div className="mt-4">
                <p>category : Vegetable</p>
                <br></br>
                <p>SKU: nmjbf445</p>
              </div>
              <div className="mt-4 flex gap-2">
                <p>Share This:</p>
                <button className="text-blue-600">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button className="text-blue-400">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
