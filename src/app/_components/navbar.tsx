"use client";
import React from "react";
import { useState } from "react";
function Navbar() {
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };
  return (
    <div className="container mx-auto max-w-full">
      <div className="navbar w-full border-[2px] border-solid border-slate-300 bg-white bg-opacity-75 shadow-lg">
        <div className="flex-1">
          <button
            onClick={toggleAbout}
            className="ml-4 text-xl font-semibold text-red-500"
          >
            {showAbout ? "Home" : "About"}
          </button>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
