import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-[#E9E3DC] flex items-center justify-between w-screen px-5 py-6 md:px-10 text-lg uppercase relative">
      {/* Logo */}
      <Link to="/">
        <h2 className="text-2xl md:text-3xl cursor-pointer">Burger Heaven</h2>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-12 items-center">
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

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <svg
          className="w-8 h-8 text-[#E9E3DC]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1E1E1E] text-[#E9E3DC] py-6 z-50 flex flex-col items-center md:hidden">
          <ul className="flex flex-col gap-4 text-center w-full">
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/menu" onClick={toggleMenu}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={toggleMenu}>
                <button className="bg-[#B3A0CD] text-black px-6 py-4">
                  ORDER ONLINE
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
