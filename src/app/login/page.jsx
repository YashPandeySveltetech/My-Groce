"use client";

import React, {useState} from "react";
import LoginForm from "@/components/forms/loginForm";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempted with:", email, password);
  };

  return (
    <div className="flex items-center justify-around p-10 min-h-screen  bg-white">
      <LoginForm handleSubmit={handleSubmit} />
      <div>
        <img src="/login.webp" />
      </div>
    </div>
  );
};

export default LoginPage;
