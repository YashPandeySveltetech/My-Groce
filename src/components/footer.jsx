import React from "react";

const Footer = () => {
  return (
    <>
      <div className="relative flex items-center mb-[-4rem] justify-center h-[50vh] w-[100%]">
        <img
          src="/footers.png"
          alt="Background"
          className="absolute inset-0 w-[100%] h-full bg-center bg-no-repeat"
        />

        <div className="relative px-4 flex flex-col items-center justify-right w-full">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Get our latest offer
            </h2>
            <p className="text-gray-600">by subscription</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mt-4 space-x-2">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="p-2 border border-gray-300 rounded-l-lg focus:outline-none"
              />
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-r-lg hover:bg-yellow-600">
                Get the Coupon
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-80">
        <footer className="bg-gray-900 text-gray-300 py-8">
          <div className="container mx-auto mt-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Column 1 */}
              <div>
                <h2 className="text-green-500 font-bold text-xl mb-4">
                  MY GROCE
                </h2>
                <ul className="space-y-2">
                  <li>Track Order</li>
                  <li>Delivery & Returns</li>
                  <li>Contact Us</li>
                  <li>Flash Sale</li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="font-bold mb-4">Important Links</h3>
                <ul className="space-y-2">
                  <li>About Us</li>
                  <li>Privacy Policy</li>
                  <li>FAQ</li>
                  <li>Terms and Condition</li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h3 className="font-bold mb-4">General Links</h3>
                <ul className="space-y-2">
                  <li>Blog</li>
                  <li>Shop</li>
                  <li>Support</li>
                  <li>Best Deals</li>
                </ul>
              </div>

              {/* Column 4 */}
              <div>
                <h3 className="font-bold mb-4">Contact Info</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Awdhapuri Colony, Behind K V School Kanchanpur Post- Kandwa,
                    Varanasi, UP
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +91-8601858519
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    s4velicon@gmail.com
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700 flex flex-wrap justify-between items-center">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <p className="text-sm mt-4 md:mt-0">
                ©2022 S4 Velicon Private Limited All rights reserved
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <img
                  src="/path-to-mastercard-logo.png"
                  alt="Mastercard"
                  className="h-8"
                />
                <img src="/path-to-visa-logo.png" alt="Visa" className="h-8" />
                <img
                  src="/path-to-paypal-logo.png"
                  alt="PayPal"
                  className="h-8"
                />
                <img
                  src="/path-to-stripe-logo.png"
                  alt="Stripe"
                  className="h-8"
                />
                <img
                  src="/path-to-mollie-logo.png"
                  alt="Mollie"
                  className="h-8"
                />
                <img
                  src="/path-to-razorpay-logo.png"
                  alt="Razorpay"
                  className="h-8"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
