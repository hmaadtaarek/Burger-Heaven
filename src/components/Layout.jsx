import React from "react";
import { Header, Footer } from "../components";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="overflow-hidden selection:bg-[#1E1E1E] selection:text-[#D1EF53]">
      <Header />
      
      <Outlet />
      <Footer />
    </div>
  );
}
