"use client";

import React, {useState} from "react";
import SignupForm from "@/components/forms/signupForm";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempted with:", email, password);
  };

  return (
    <div className="flex items-center justify-around p-10 min-h-screen  bg-white">
      <SignupForm handleSubmit={handleSubmit} />
      <div>
        <img src="/login.webp" />
      </div>
    </div>
  );
};

export default SignUpPage;
