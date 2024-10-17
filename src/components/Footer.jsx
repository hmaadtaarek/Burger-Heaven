import React from 'react'
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="p-10">
        <div className="h-80 w-full rounded-3xl flex flex-col justify-between items-center px-10 py-8 gap-10 bg-[#B3A0CD] text-[#1E1E1E]">
          <div className=" w-full flex items-center justify-between">
            <div className="w-1/5 h-full">
            <Link to="/">
              <h4 className="text-3xl uppercase">Burger hEAVEN</h4>
            </Link>
            </div>
            <div className="w-1/5 h-full flex flex-col gap-1">
              <h4 className="text-lg uppercase">Links</h4>

              <Link to="/about"><p className="text-lg font-inter">About</p></Link>
              <Link to="/menu"><p className="text-lg font-inter">Menu</p></Link>
              <p className="text-lg font-inter">Locations</p>
              <p className="text-lg font-inter">Privacy</p>
            </div>
            <div className="w-1/5 h-full">
              <h4 className="text-lg uppercase">Timings</h4>
              <p className="text-lg font-inter leading-8">
                Open from
                <br />
                11AM to
                <br />
                11PM daily
              </p>
            </div>
            <div className="w-2/5 h-full">
              <h4 className="text-lg uppercase">Join Our News Letter</h4>
              <p className="text-sm font-inter w-2/3">
                Subscribe to our weekly newsletter and be the first to get our
                latest updates and promotions.
              </p>
              <form>
                <div className="w-3/4 flex items-center justify-between rounded-md py-3 px-5 mt-5 border-2 border-[#1E1E1E]">
                  <input
                    className="bg-transparent w-2/3 text-[#1E1E1E]/80 font-inter placeholder:text-[#1E1E1E]/40 placeholder:font-inter  focus:border-transparent focus:outline-none"
                    type="text"
                    placeholder="Email"
                  />

                  <button className=" text-black uppercase">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-md font-inter">Copyright Burger Heaven</p>
            <p className="text-md font-inter">Privacy Policy</p>
          </div>
        </div>
      </footer>
  )
}
