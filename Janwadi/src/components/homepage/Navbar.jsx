import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between w-screen h-30 bg-white py-5 px-7 border-b">
      <div className="w-30 h-30 flex items-center font-bold text-gray-900">
        <img src="/public/janwadi.png" className="h-60 w-60 object-cover rounded-full"></img>
        <h2 className="text-2xl ml-2">Janwani <p className="text-xs">(For Solving Civic Issues)</p></h2>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-25 text-gray-900 font-semibold text-7xs">
        <span className="cursor-pointer">Home</span>
        <span className="cursor-pointer">About</span>
        <span className="cursor-pointer">Problem Status</span>
        <span className="cursor-pointer">Register Problem</span>
        <span className="cursor-pointer">Contact</span>
        <div className="flex items-center gap-2">
          <p className="bg-green-600 text-white font-semibold py-1 px-3 rounded-2xl">Login</p>
          <span>/</span>
          <p className="text-white font-semibold py-1 px-3 rounded-2xl bg-orange-400">Register</p>
        </div>
      </div>
      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-gray-900 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-900 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-900 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </div>
        </button>
        {isMenuOpen && (
          <div className="absolute top-30 left-0 w-full bg-white border-b shadow-lg z-10">
            <div className="flex flex-col items-center gap-4 py-4 text-gray-900 font-semibold">
              <span className="cursor-pointer">Home</span>
              <span className="cursor-pointer">About</span>
              <span className="cursor-pointer">Problem Status</span>
              <span className="cursor-pointer">Register Problem</span>
              <span className="cursor-pointer">Contact</span>
              <div className="flex items-center gap-2">
                <p className="bg-green-600 text-white font-semibold py-1 px-3 rounded-2xl">Login</p>
                <span>/</span>
                <p className="text-white font-semibold py-1 px-3 rounded-2xl bg-orange-400">Register</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
