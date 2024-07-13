import React from "react";

function LoginForm({handleSubmit}) {
  return (
    <div className="px-8 py-6 mt-4 w-[30%] text-left bg-white border border-green-600 h-[80vh]">
      <div className="w-full flex justify-center mt-[7rem]  flex-col items-center">
        <h3 className="text-4xl font-bold text-center ">Log In</h3>

        <svg
          width="200"
          height="30"
          viewBox="0 0 354 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
            stroke="#27AE60"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
        </svg>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <div>
            <label className="block text-gray-500 text-[15px]" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
              //   value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-500 text-[15px]	">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
              //   value={password}
            //   onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-baseline justify-between my-4">
            <a href="#" className="text-sm text-green-600 hover:underline">
              <input className="mr-2" type="checkbox" />
              Remember Me
            </a>
            <a href="#" className="text-sm text-green-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button className="px-6 py-2 mt-4 text-white w-full bg-green-600 rounded-lg hover:bg-green-700">
            Log In
          </button>
        </div>
      </form>
      <div className="mt-6 text-center text-grey-dark">
        Don't have an account?
        <a className="text-green-600 hover:underline" href="#">
          {" "}
          Sign Up Free
        </a>
      </div>
    </div>
  );
}

export default LoginForm;
