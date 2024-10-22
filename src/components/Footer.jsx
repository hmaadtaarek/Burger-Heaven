import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="p-5 md:p-10">
      <div className="w-full rounded-3xl flex flex-col justify-between items-center gap-10 bg-[#B3A0CD] text-[#1E1E1E] py-10 px-5 md:px-10">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          
          {/* Logo Section */}
          <div className="w-full md:w-1/5">
            <Link to="/">
              <h4 className="text-2xl md:text-3xl uppercase text-center md:text-left">
                Burger Heaven
              </h4>
            </Link>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/5 flex flex-col gap-1">
            <h4 className="text-lg uppercase text-center md:text-left">Links</h4>
            <Link to="/about">
              <p className="text-lg font-inter text-center md:text-left">About</p>
            </Link>
            <Link to="/menu">
              <p className="text-lg font-inter text-center md:text-left">Menu</p>
            </Link>
            <p className="text-lg font-inter text-center md:text-left">Locations</p>
            <p className="text-lg font-inter text-center md:text-left">Privacy</p>
          </div>

          {/* Timings Section */}
          <div className="w-full md:w-1/5">
            <h4 className="text-lg uppercase text-center md:text-left">Timings</h4>
            <p className="text-lg font-inter leading-8 text-center md:text-left">
              Open from <br /> 11AM to <br /> 11PM daily
            </p>
          </div>

          {/* Newsletter Section */}
          <div className="w-full md:w-2/5">
            <h4 className="text-lg uppercase text-center md:text-left">Join Our Newsletter</h4>
            <p className="text-sm font-inter w-full md:w-2/3 text-center md:text-left">
              Subscribe to our weekly newsletter and be the first to get our latest updates and promotions.
            </p>
            <form>
              <div className="w-full md:w-3/4 flex items-center justify-between rounded-md py-3 px-5 mt-5 border-2 border-[#1E1E1E]">
                <input
                  className="bg-transparent w-2/3 text-[#1E1E1E]/80 font-inter placeholder:text-[#1E1E1E]/40 placeholder:font-inter focus:border-transparent focus:outline-none"
                  type="text"
                  placeholder="Email"
                />
                <button className="text-black uppercase">Submit</button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-sm md:text-md font-inter text-center md:text-left">Copyright Burger Heaven</p>
          <p className="text-sm md:text-md font-inter text-center md:text-left">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
