import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav className="text-[#E9E3DC] flex items-center justify-between w-screen px-10 py-6 text-lg uppercase">
      <Link to="/">
        <h2 className="text-3xl cursor-pointer">Burger Heaven</h2>
      </Link>
      <div className="flex gap-12 items-center ">
        <ul className="flex gap-12">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
        <Link to="/login">
        <button className="bg-[#B3A0CD] text-black px-6 py-4">
          ORDER ONLINE
        </button>
        </Link>
      </div>
    </nav>
  );
}
