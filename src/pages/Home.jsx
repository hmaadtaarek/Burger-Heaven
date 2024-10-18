import React from "react";
import { Link } from "react-router-dom";
import { Burgers, burger, fries, resturant } from "../assets";
import { Header, Footer, Marque } from "../components";

export default function Home() {
  return (



      <main>
        {/* //section 1 Hero section */}
        <section className="flex items-center justify-center flex-col h-full py-10">
          <div className="text-center h-full ">
            <h1 className="text-7rem leading-extra-tight md ">
              NEW YORK’S
              <br /> FAVORITE ORGANIC HAMBURGER JOINT
            </h1>
          </div>
          <div className="flex justify-center h-full items-end w-screen relative px-10">
            <img src={Burgers} alt="Burger Image" />
          </div>
        </section>

        {/* // section 2 about us */}
        <section className="flex flex-col items-center h-full py-10 px-10 ">
          <div className="h-80 max-w-[100rem] rounded-3xl flex justify-center items-center px-40 gap-10 bg-[#D1EF53] text-[#1E1E1E] -z-10">
            <div className="">
              <h3 className="text-5xl uppercase w-3/4">
                the burger above all burgers
              </h3>
            </div>
            <div className="">
              <p className="font-inter w-3/4 mb-10 text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                nec ornare neque.
              </p>
              <Link to="/about">

                <button className="relative px-6 py-3 bg-[#E9E3DC] text-black font-bold border-4 border-black z-10"> 
                  ABOUT US
                  <span className="absolute w-full h-full left-2 top-2 bg-black -z-10 pointer-events-none" />
                
                </button>
              </Link>
            </div>
          </div>

          <div className="flex  items-center justify-center gap-10 mt-10">
            <div className="relative">
              <div className="absolute left-5 bottom-5 p-10 bg-black w-96 min-h-40 rounded-3xl">
                <h4 className="text-2xl uppercase mb-4">
                  Salt & Vinegar French Fries
                </h4>
                <Link to="/menu">
                  <h5 className="text-xl uppercase text-[#B3A0CD]">
                    Order online
                  </h5>
                </Link>
              </div>
              <img 
              src={fries} 
              alt="fries image" />
            </div>

            <div className="relative">
              <div className="absolute left-5 bottom-5 p-10 bg-black w-96 min-h-40 rounded-3xl">
                <h4 className="text-2xl uppercase mb-4">
                  crispy chicken burger
                </h4>
                <Link to="/menu">
                  <h5 className="text-xl uppercase text-[#B3A0CD]">
                    Order online
                  </h5>
                </Link>
              </div>
              <img src={burger} alt="fries image" />
            </div>
          </div>
        </section>

        {/* section 3 order online */}
        <section className="flex flex-col min-h-screen py-10">
          <Marque />
          <div className="py-14 px-10 flex justify-center">
            <img
              className="rounded-3xl h-96 w-[100rem] object-cover border-[#D9D9D9] border-4"
              src={resturant}
              alt="resturant image."
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-10 py-10">
            <h3 className="text-6xl uppercase text-center">
              order online or <br /> come visit us today
            </h3>
            <Link to="/login">
              <button className="bg-[#D1EF53] text-black uppercase px-6 py-4">
                Get started
              </button>
            </Link>
          </div>
        </section>

      </main>


  );
}
