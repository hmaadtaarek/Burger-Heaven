import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../components";

export default function Login() {
  return (
    <div className="flex w-screen h-screen p-20 ">

      {/* Right Side Div */}
      <div className=" max-w-1/2 w-1/2 ">
        <div className="flex flex-col w-full h-full gap-1 justify-center">
          <h3 className="text-4xl uppercase text-">Welcome Back to </h3>
          <Link to= "/">
          <h1 className="text-6xl uppercase text-[#d1ef53] mb-10">
            Burger Heaven!
          </h1>
          </Link>
          <h4 className="text-3xl uppercase text-[#B3A0CD] mb-2">
            Craving that Juicy Burger?
          </h4>
          <p className="text-2xl font-inter w-2/3">
            Sign in to your account and place your order in seconds.
          </p>
        </div>
      </div>

      {/* left Side Div */}
      <div className="max-w-1/2 w-1/2 px-20 flex flex-col justify-center">
        <div className="flex flex-col p-12 bg-[#e9e3dc]/20 rounded-3xl h-fit w-fit ">
          <form className="flex flex-col items-center">
            {/* Email input */}
            <Input
              type="email"  name="email"
              id="loginEmail"  label="Email" />

            {/* Password input */}
            <Input
              type="password" name="password"
              id="loginPassword" label="Password" />


            <div className="flex gap-2 h-fit items-center justify-center font-inter mt-8">
            <p className="text-md">New to Burger Heaven?</p>
            <Link to="/signup">

              <button className=" text-[#d1ef53] text-underline uppercase text-md  ">
                Sign Up
              </button>
            </Link>
          </div>
          
            <button className="mt-8 bg-[#B3A0CD] text-black px-10 py-3 rounded-md uppercase text-lg ">
              Login
            </button>

          </form>
          
        </div>
      </div>
    </div>
  );
}
